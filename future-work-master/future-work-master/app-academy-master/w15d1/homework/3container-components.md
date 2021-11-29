# Container Components
As you saw in an earlier article, there can be quite a bit of code involved in connecting a component to the store. Putting all this code into the component with heavy rendering logic tends ot cause bloated components and violates the priciple of seperation fo concerns. Therefore, it's a common pattern in Redux code to seperate presentational components from their connect counterparts, called containers.

When you finish this article, you should be able to:
* Describe how container components differ from presentational components
* Write a container component to handle all of the Redux store interaction for one or more presenational components.

# Comparing presentational and container components
The distinction between presentation components and containers is not technical, but rather functional. Presenational components are concerned with how things link and container components are concerned with how things work.

* Presentational is not aware of Redux while Conatainers are.
* Presentational reads data from props while Containers subscribe to the Redux state.
* Presentational invoke callbacks from props while Containers dispatch Redux actions.

Note: You'll start with writing all of the code for your container components by hand. Later in this lesson, you'll learn how to create container components using the React-Redux library's ```connect``` method.

# Determining where to create containers
Not every component needs to be connected to the store. Generally, you'll only want to create containers for the `big` components in your app that represent sections of a page and contain smaller purely functional presentational components. These larger container components are responsible for interacting withthe store and passing state and disapctch props down to all their presentational chilred.

For the Fruit Stand aplication,a  good starting point would be to create two container components, ```FruitManagerContainer``` and ```FarmerManagerContainer```, to respectively render the presentational components for the "Fruit" and "Farmers" secitons of the page. Here's a visual representation of that component hierarchy:

```
App
├── FruitManagerContainer
│   └── FruitManager
│       ├── FruitList
│       ├── FruitSeller
│       ├── FruitQuickAdd
│       └── FruitBulkAdd
└── FarmerManagerContainer
    └── FarmerManager
        ├── FarmerList
        │   └── Farmer
        └── FarmerHire
```

Notice that the container component names are a combination of the name of the presentational component that they wrap and the suffix "Container".

In general, aim to have fewer containers rather than more. Most of the components you'll write will be presentational, but you'll need to generate a few containers to connect presentaional components to the Redux store.

# Writing a container component
While you can write a container component from scratch, you can also refactor an existing React component that interacts with a Redux store into seperate container and presentational components.

## Using a container component to retrieve state
Here's the current version of the ```FruitList``` component that subscribes to the store (suing ```store.subscribe```) to know when state has been updated and calls ```store.getState``` to retrieve and redner the ```fruit``` state slice:

```
// ./src/components/FruitList.js

import React form 'react';
import store from '../store';

class FruitList extends React.Component{
    componentDidMount(){
        this.unsubscribe = store.subscribe(())=>{
            this.forceUpdate();
        }
    }

    componentWillUnmount(){
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }
    render(){
        const {fruit}= store.getState();

        return(
            <div>
                {fruit.length>0
                ? <ul{fruit.map((fruitName, index)=> <li key={index}>{fruitName}</li>)}></ul>
                : <span>No fruit currently in stock!</span>
                }
            </div>
        );
    }
}

export default FruitList;
```

The ```FruitManager``` component is responsible for rendering each of the fruit-related components (i.e. ```FruitList```, ```FruitSeller```, ```FruitQuickAdd```, and ```FruitBulkAdd```), so create a container component named ```FruitManagerContainer``` to handle all of the store interaction for the "Fruit" section of the page.

To review, here's what the component hierachy will look like:

```
FruitManagerContainer
└── FruitManager
    ├── FruitList
    ├── FruitSeller
    ├── FruitQuickAdd
    └── FruitBulkAdd
```

As a starting point, here's the code for the ```FruitManagerContainer``` component:

```
// ./src/components/FruitManagerContainer.js

import React from 'react';
import store from '../store';
import FruitManager from './FruitManage';

class FruitMaangeContainer extends React.Component{
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=> this.forceUpdate());
    }

    componentWillUnmount(){
        if(this.unsubscribe){
            this.unsubscribe();
        }
    }
    render(){
        const {fruit} = store.getState();

        return (
            <FruitManager fruit={fruit}/>
        );
    }
}

export default FruitManagerContainer;
```

Notice that the container component, just like the original verison of the ```FruitList``` component, subscribes to the store (using ```store.subscribe```) to know when state has been udpated and calls ```store.getState``` to retrive the ```fruit``` state slice. But instead of directly rendering the ```fruit``` state, it sets a propr on the ```FruitManager``` component to pass the state down the component hierarchy.

The ```FruitManager``` component receives the ```fruit``` prop and in turn uses a prop to pass it down the ```FruitList``` component:

```
// ./src/components/FruitManager.js

import React from 'react';
import FruitList from './FruitList';
import FruitSeller from './FruitSeller';
import FruitQuickAdd from './FruitQuickAdd';
import FruitBulkAdd from './FruitBulkAdd';

const FruitManager = ({fruit})= >{
    return(
        <div>
            <h2>Available Fruit</h2>
            <FruitList fruit={fruit}/>
            <h2>Fruit Inventory Manager</h2>
            <FruitSeller/>
            <FruitQuickAdd/>
            <FruitBulkAdd/>
        </div>
    );
};

export default FruitManager;
```

And finaly, the ```FruitList``` component receives the ```fruit``` prop and renders it into an unordered list:

```
// ./src/components/FruitList.js

import React from 'react';

const FruitList = ({fruit}) =>{
    return(
        <div>
        {fruit.length>0
            ? <ul>{fruit.map((fruitName, index)=> <li key={index}>{fruitName}</li>)}</ul>
            : <span>No fruit currently in stock!</span>
        }
        </div>
    )
}

export default FruitList;
```

Reminder: Using component props ot pass a value down the component hierarchy is known as prop threading.

Notice that the ```FruitList``` presentational component, which no longer needs to use the ```componentDidMount``` and ```componentWillMount``` lifecycle methods to subscribe and unsubscribe to the store, can be refactored into a function component. Additionally, the ```store``` is no longer imported in the ```FruitList``` module, as the ```FruitList``` component simply receives and renders the ```fruit``` state via prop without any knowledge of or direct interaction with the store.

## Using a container component to dispatch actions
Here's the current version of ```FruitQuickAdd``` component that dispatches the ```ADD_FRUIT``` action to add a fruit to the fruit stand:

```
// ./src/components/FruitQuickAdd.js

import React from 'react';
import store from '../store';
import {addFruit} from '../actions/fruitActions';

class FruitQuickAdd extends React.component{
    addFruitClick =(event)=>{
        const fruit = event.target.innerText;
        store.dispatch(addFruit(fruit));
    }
    render(){
        return (
            <div>
                <h3>Quick add</h3>
                <button onClick={this.addFruitClick}>APPLE</button>
                <button onClick={this.addFruitClick}>ORANGE</button>
            </div>
        )
    }
}

export default FruitQuickAdd;
```

To prepare to refactor the ```FruitQuickAdd``` component into a presentational component, update the ```FruitManagerContainer``` component to the following code:
```
// ./src/components/FruitManagerContainer.js

import React from 'react';
import store from '../store';
import {addFruit} from '../actions/fruitActions';
import FruitManager from './FruitManager';

class FruitManagerContainer extends React.component{
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.forceUpdate();
        })
    }
    componentWillUnmount(){
        if(this.unsubscribe){
            this.unsubsribe();
        }
    }
    add = (fruit)=>{
        store.dispatch(addFruit(fruit));
    }

    render(){
        const {fruit} =store.getState();
        <FruitManager
            fruit={fruit}
            add={this.add}>
    }
}
```

Notice that the ```addFruit``` action creator is imported (at the top of the file) and a new component method named ```add``` receives a ```fruit``` parameter value and calls ```store.dispatch``` to dispatch ```Add_FRUIT``` action. The ```render``` method sets a prop on the ```FruitManager``` component to pass the ```add``` method down the component hierarchy.

The ```FruitManager``` component receives the ```add``` prop and in turn uses a prop to pass it down to the ```FruitQuickAdd``` component:

```
// ./src/components/FruitManager.js

import React from 'react';
import FruitList from './FruitList';
import FruitSeller from './FruiSeller';
import FruitQuickAdd from './FruitQuickAdd';
import FruitBulkAdd from './FruitBulkAdd';

const FruitManager = ({fruit, add}) =>{
    return (
        <div>
            <h2>Available Fruit</h2>
            <FruitList fruit={fruit}/>
            <h2>Fruit Inventory Manager</h2>
            <FruitSeller/
            <FruitQuickAdd add={add}>
            <FruitBulkAdd />
        </div>
    );
};

```

And finally, the ```FruitQuickAdd``` component recevies the ```add``` callback function via a prop and calls it within a ```handleClick``` event handler, passing in the target button's inner text:

```
// ./src/components/FruitQuickAdd.js

import React from 'react';

const FruitQuickAdd = ({add})=>{
    const handleClick = (event)=> add(event.target.innerText);

    return(
        <div>
            <h3>Quick Add</h3>
            <button onClick={handleClick}>APPLE</button>
            <button onclick={handleClick}>ORANGE</button>
        </div>
    )
}

export default FruitQuickAdd;
```

The change between the original and refactored ```FruitQuick``` component isn't as dramatic as it was with the ```FruitList``` component example, but it's still a significant imporvement to the overall seperation of concerns. The ```FruitQuickAdd``` component is now strictly concert with rendering the UI and handling user generated events (i.e. button clicks) and the ```FruitManagerContainer``` component is now strictly concered with interacting with the Redux store.

## Reviewing the completed container commponent
The ```FruitManagerContainer``` constainer component can continue to be explanded until each of its child presentational components no longer interact directly with the store. Here's a look at the completed ```FruitManagerContainer```component:

```
// ./src/components/FruitManagerContainer.js

import React from 'react';
import store from '../store';
import {addFruit, addFruits, sellFruit, sellOut} from '../actions/fruitActions';
import FruitManager from './FruitManager';

class FruitManageContainer extends React.Component{
    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.forceUpdate();
        });
    }
    componentWillUnmount(){
        if this.unsubscribe{
            this.unsubscribe();
        }
    }

    add = (fruit) =>{
        store.dispatch(addFruit(fruit));
    }

    addBulk= (fruit) =>{
        store.dipatch(addFruits(fruit))
    }
    sell = (fruit) =>{
        store.dispatch(sellFruit(fruit))
    }

    sellAll = ()=>{
        store.dispatch(sellOut());
    }

    render(){
        const {fruit} = store.getState();
        const distinctFruit = Array.from(new Set(fruit)).sort();

        return(
            <FruitManager
                fruit={fruit}
                distinctFruit={distinctFruit};
                add={this.add}
                addBulk={this.addBulk}
                sell={this.sell}
                selAll={this.sellAll}
            />
        );
    }
}

export default FruitManagerContainer;
```

https://github.com/appacademy-starters/redux-fruit-stand-examples

# What you learned
In this aritcle, you learned how container components differ from presentational components.You also learned how to write a cointainer component to handle all of the Redux store interaction for one more prsentational components.
