# Splitting and Combining Reducers
So far, you've been using a single reducer to manage state in your Redux store. As your applications increase in size and complexity, it'll become necessary to use mutiple redues, each managing a slice of state.

When you finish this article, you should be able to:
* Define multiple reducers to manage individual slices of state.
* Use the Redux ```combineReducers``` method to combine multiple reducers into a single root reducer.
* Update a reducer to delegate a state update to a subordiante reducer

# Splitting reducers
Imagine that your fruit stand is extermely successful and it grows so much that you need multiple farmers helping you to keep your stand stocked with fruit. Your application's state will need to grow to store not only an array of ```fruit``` but also a ```farmers``` object that keeps track of your farmers.

Here's a sample state tree of your updated application:

```
{
    fruit:['APPLE','APPLE','ORANGE','GRAPEFRUIT','WATERMELON'],
    farmers:{
        1:{
            id:1,
            name: 'John Smith',
            paid: false,
        }
        2:{
            id:2,
            name: 'Sally Jones',
            paid: false,
        }
    }
}
```

The store now needs to handle new action types like ```'HIRE_FARMER'``` and ```'PAY_FARMER'``` by updating the ```farmers``` slice of state. You could add more cases of your existing reducer, but eventually the existing reducer would become too large and difficult to manage. The solution is to split the reducer into seperate ```fruit``` and ```farmers`` reducers.

Splitting up the reducer into multiple reducers handling seperate, independent slices of state is called reducer componsition, and it's the fundamental pattern of building Redux apps. Because each reducer only handles a single slice of state, its ```state``` parameter corresonds only to the part of the state that it manages and it only responds to actions that concert that slice of state.

Split up your popular Fruit Stand application's reducer into two reducers:
* ```fruitReducer``` - A reducing function that handles actions updating the ```fruits``` slice of state.
* ```farmersReducer``` - A reducing function that handles acitons updating the new ```farmers``` slice of state.

```
// ./src/reducers/fruitReducer.js

import {ADD_FRUIT, ADD_FRUITS, SELL_FRUIT, SELL_OUT} from '../actions/fruitActions';

const fruitReducer = (state = [], action) =>{
    switch (action.type){
        case ADD_FRUIT:
            return [...state, action.fruit]
        case ADD_FRUITS:
            return [...state, ...action.fruit]
        case SELL_FRUIT:
            const index = state.indexOf(aciton.fruit);
            if(index !==-1){
                // remove first instance of action.fruit
                return [...state.slice(0, index), ...state.slice(index+1)];
            }
            return state; // if action.fruit is not in state, return previous state.
        case SELL_OUT:
            return [];
        default:
            return state;
    }
}

export default fruitReducer;
```

```
// ./src/reducers/farmersReducer.js

import {HIRE_FARMER, PAY_FARMER} from '../actions/farmersActions';

const farmersReducers((state=[], action)=>{
    switch (action.type){
        case HIRE_FARMER:
            const farmerToHire ={
                id: action.id,
                name: action.name,
                paid: false
            };
            nextState[action.id] = farmerToHire;
            return nextState;
        case PAY_FARMER;
            const farmerToPay = nextState[action.id];
            farmerToPay.paid = !farmerToPay.paid;
            return nextState;
        default:
            return state;
    }
});

export default farmersReducer;
```

You'll also need to define a module comtaining the ```'HIRE_FARMER'``` and ```'PAY_FARMER'``` actions

```
// ./src/actions/farmersActions.js

export const HIRE_FARMER = 'HIRE_FARMER';
export const PAY_FARMER = 'PAY_FARMER';

export const hireFarmer = (name)=>{
    return{
        type: HIRE_FARMER,
        id: new Date().getTime(),
        name,
    }
}

export const payFarmer = (id)=>{
    return {
        type: PAY_FARMER,
        id,
    }
}
```

# Combining reducers
Your reducer setup is now much more modular. However, ```createStore``` only takes one ```reducer``` argument, so you must combine your reducers back into a single reducer to pass to the store. To do this you'll use the ```combineReducers``` method from the ```redux``` package and pass it an object that maps state keys to the reducers that handle those slices of state. Below, the ```combineReducers``` maps the ```fruitReducer``` for the ```fruit``` slice of state and the ```farmersReducer``` for the ```farmers``` slice of state. Invoking the ```combineReducers``` function returns a single ```rootReducer``` that you can use to create your Redux store.

```
// ./src/reducers/rootReducer.js

import {combineReducers} from 'redux';
import fruitReducer from './fruitReducer';
import farmersReducer from './farmersReducer';

const rootReducer = combineReducers({
    fruit: fruitReducer,
    farmers: farmersReducer
})

export default rootReducer;
```

```
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';

const store = createStore(rootReducer);

export default store;
```

# Delegating to reducers
Another aspect of reducer composition involes delegating state updates to subordinate reducers. Consider the farms reducer. You can modify it so that the ```farmers``` (plural) reducer delegates to a ```farmer``` (singular) reducer whenever a single farmer's attributes need to be modified (in this cas whenever a farm has been hired or paid):

```
// ./src/reducers/farmersReducers.js

import {HIRE_FARMER, PAY_FARMER} from '../actions/farmersActions';

const farmerReducer = (state, action)=>{
    // State is a farmer object
    switch (action.type){
        case HIRE_FARMER:
            return {
                id: action.id,
                name: action.name,
                paid: false
            }
        case PAY_FARMER:
            return Object.assign({}, state, {paid: !state.paid});
        default:
            return state;
    }

    const farmersReducers = (state={}, action) =>{
        let nextState = Object.assign({}, state);
        switch (action.type)
            case HIRE_FARMER:
                nextState[action.id] = farmerReducer(undefined, action);
                return nextState;
            case PAY_FARMER:
                nextState[action.id]= farmerReducer(nextState[action.id], action);
                return nextState;
            default:
                return state;
    }
}

export default farmersReducer;
```

## Catching and prevent state mutation bugs
Updating the ```farmersReducer``` to delegate farmer state updates to the ```farmerReducer``` resolved a subtle state mutation bug. take another look at the original implementation of the ```farmersReducer``` function:

```
const farmersReducer = (state={}, action) =>{
    let nextState = Object.assign({}, state);

    switch (action.type){
        case HIRE_FARMER:
            const farmerToHire ={
                id: action.id,
                name: action.name,
                paid: false
            };
            nextState[action.id] = farmerToHire;
            return nextState;
        case PAY_FARMER
            const farmerToPay = nextState[action.id];
            farmerToPay.paid = !farmerToPay.paid;
            return nextState;
        default:
            return state;
    }
}
```

Notice that the ```state``` parameter is duplicated to the ```nextState``` variable using the ```Object.assign``` mthod:
```
let nextState = Object.Assign({}, state);
```

While this code correctly creates a duplicate of the ```state``` object, ```nextSate``` is only a shallow duplicate as only the top-level-object is duplicated. Each "farmer" object that the ```state``` object refers to are still the same objects.

In the ```PAY_FARMER``` case clause, the farmer object is mutated by setting the ```paid``` property to a new value:
```
case PAY_FARMER:
    const farmertoPAY = nextState[action.id];
    farmerToPay.paid = !farmerToPay.paid;
    return nextState;
```

Now lookg again at the ```PAY_FARMER``` case clause in the version of the ```farmersReducer``` that delegates farmer state updates to the ```farmerReducer```:

```
case PAY_FARMER:
    nextState[action.id] = farmerReducer(nextState[action.id], action);
    return nextState;
```

This code calls the ```farmerReducer``` by passing in the farmer object for the ```action.id``` property value(i.e. ```nextState[action.id]```) and the ```action``` parameter. The ```farmerReducer``` has a ```PAY_FARMER``` case clause that correctly uses the ```Object.assign``` method to duplicate the farmer object with the new ```paid``` property value (i.e. ```Object.assign({}, state, {paid:!state.paid})```):

```
const farmerReducer = (state, action)=>{
    // State is a farmer object.
    switch (action.type){
        case: HIRE_FARMER:
            return {
                id: action.id
                name: action.name,
                paid: false
            };
        case PAY_FARMER:
            return Object.assign({}, state, {
                paid: !state.paid
            });
        default:
            return state;
    }
};
```

Catching state mutation bugs is difficult to do. Leveraging patterns like reducer composition can help you from introducing these kinds of bugs in the first place.

# Reviewing a completed Fruit Stand example
To review and run a completed Fruit Stand example application taht contains multiple reducers, clone the redux-fruit-stand-example repo. https://github.com/appacademy-starters/redux-fruit-stand-examples

# What you learned
In this article, you learned how to define multiple reducrs to manage individual slices of state. You also learned how to use the Redux ```combineReducers``` method to combine multiple reducers into a single root reducer and how to update a reducer to delegate a state update to a subordinate reducer.
