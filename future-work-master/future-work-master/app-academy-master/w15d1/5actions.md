# Actions
As you've already learned from an earlier article, actions are the only way to trigger changes to the store's state. Remember, actions are simple PJOs with a manatory ```type``` key and optional keys containing new information. They get sent using ```store.dispatch()``` and are the primary drivers of the Redux loop.

When you finish this article, you should be able to:
* Write an action creator function to facilitate in the creation of action objects
* Use constants to define types to prevent simple typos in action type string literals.

# Using action creators
When an action is dispatched, any new state data must be pased along as the payload. The example below passes a payload key of ```fruit``` with the new state data, 'orange':

```
const addOrange ={
    type: 'ADD_FRUIT',
    fruit: 'orange',
}

store.dispatch(addOrange);
console.log(store.getState()); // ['orange']
```

However, when these action payloads are generated dynamically, it becomes necessary to extrapolate the creation of the aciton object into a function. These functions are called action creators. The Javascript objects they return are the actions. To initiate a dispatch, you pass the result of calling an action creator to ```store.dispatch()```.

For example, action creator function to create 'ADD_FRUIT' action looks like this:

```
const addFruit = (fruit) =>{
    return {
        type: 'ADD_FRUIT',
        fruit,
    };
};
```

You can also rewrite the above arrow function to use an implicit return value:

```
const addFruit = (fruit)=>({
    type: 'ADD_FRUIT',
    fruit,
});
```

While either approach for defining action creators using arrow functions work, the latter approach of using an implicit return makes it more difficult to debug the Redux cycle (you'll see why later in this lesson).

Now we can add any ```fruit``` to store using our action creator ```addFruit(fruit)```, instead of having to define an action object for each fruit:

```
store.dispatch(addFruit('apple`));
store.dispatch(addFruit('strawberry`));
store.dispatch(addFruit('lychee'));
console.log(store.getState()); // ['orange', 'apple', 'strawberry', 'lychee']
```

# Preventing typos in action type string literals
Update your actions to include ```'ADD_FRUIT'```, ```'ADD_FRUITS'```, ```'SELL_FRUIT'```, and ```'SELL_OUT'```:

```
const ADD_FRUIT = 'ADD_FRUIT';
const ADD_FRUITS = 'ADD_FRUITS';
const SELL_FRUIT = 'SELL_FRUIT';
const SELL_OUT = 'SELL_OUT';

const addFruit = (fruit)=>{
    return {
        type: ADD_FRUIT,
        fruit
    }
};

const addFruits = (fruits)=>{
    return {
        type: ADD_FRUITS,
        fruit
    }
};

const sellFruit = (fruit)=>{
    return {
        type: SELL_FRUIT,
        fruit
    }
};

const sellOut = ()=>{
    return {
        type: SELL_OUT,
    }
};
```

Notice that constants were used for all of the fruit action types. This prevents simple typos in the reducer's case clauses (i.e. ```'ADD_FRUIT'```). Creating constants for the action type string literals ensures that an error is thrown if the constant name is mistyped;.

# Reviewing a completed Fruit Stand example
To review and run a completed Fruit Stand example application, clone the redux-fruit-stand-examples repo. https://github.com/appacademy-starters/redux-fruit-stand-examples

After cloning the repo, open a terminal and browse to the ```fruit-stand-redux``` folder. Run the command ```npm install``` to install the project's dependancies. Then use the command ```node app.js``` to run the Fruit Stand application. you should see the following output:

```
Default Redux Store (empty fruit list):
[]
Redux Store:
['orange', 'apple']
Redux Store:
['orange', 'apple', 'orange', 'lychee', 'grapefruit']
Updated Redux Store:
['orange', 'orange', 'lychee', 'grapefruit']
Reset Redux Store (empty fruit list):
```

The ```reduxSAR.js``` file conains the action types, reducer, store, and action creator functions. The ```app.js``` file contains the code that inereacts with the Redux store. the ```appWithSubscription.js``` file also contains code that interacts with the stor but subscribes a callback funtion (using the ```store.subscribe``` method) to listen for and log state updates to the console.

# What you learned
In this article, you learned how to write an action creator function to facilitate in the creation of action objects. you also learned how to use constants to define action types to prevent simple typos in action type string literals.

# See also...
To learn morea bout actions, see the officla Redux documentation. http://redux.js.org/docs/basics/Actions.html
