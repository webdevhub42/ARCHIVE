# Debugging Arrow Functions
Arrow functions are ubiquitous in React and Redux. Understanding how to use ```debugger``` statements with arrow functions is necessary to be able to effectively debug the Redux cycle.

When you finish this article, you should be able to:

* Describe why ```debugger``` statements can't be used with arrow functions that have an implicit return value.
* Rewrite an arrow function with an implicit return value to use an explicit return statement so that the ```debugger``` statement can be used.

# Understanding the limitations of implicit return
Here's an example of a Redux action creator that's defined using an arrow functoin with an implicit return value:

```
const addFruit = (fruit)=> ({
    type: 'ADD_FRUIT',
    fruit,
});
```

While using an arrow function with an implicit return value allows you to concisely define ```addFruit```, it's difficult to debug. Supposse you want to use a ```debugger``` statement to stop execution within ```addFruit``` to inspect the value of the ```fruit``` parameter. You can't do this:

```
const addFruit = (fruit) => ({
  debugger // The debugger doesn't work
  type: 'ADD_FRUIT',
  fruit,
});
```

```{type: 'ADD_FRUIT', fruit}``` is an object, and you cannot put a ```debugger``` statement inside of an object. But you also can't do this:

```
const addFruit =(fruit)=>(
    debugger
    {
        type: 'ADD_FRUIT',
        fruit,
    }
);
```

The parenthesis after the fat arrow (```=>```) are used to indicate that the object ```{type: 'ADD_FRUIT', fruit}``` should be implicitly returned. As a result, the above won't work, because we can't put a debugger inside of a return statement.

# Rewriting an arrow function to use an explicit return statement
To put a ```debugger``` statement inside of the ```addFruit``` action creator function, you first need to convert it into an arrow function with an explicit return statement:

```
const addFruit = (fruit)=>{
    return {
        type: 'ADD_FRUIT',
        fruit,
    };
};
```

Now finally, you can put the ```debugger``` statement before the ```return``` statement:

```
const addFruit = (fruit) =>{
    debugger;
    return {
        type: 'ADD_FRUIT',
        fruit
    };
};
```

If you want to avoid having to do this over and over again as you're debugging your arrow functions, you can make it a habbit to write all of you arrow funtions with explicit return statements. Do be aware, however, that writing arrow functions with implicit return values is a common convention in Redux and you will see it often out in the wild.

# What you learned
In this article, you learned why ```debugger``` statements can't be used with arrow functions that have an implicit return value. You also learned how to rewrite an arrow function with an implicit return value to use an explicit return satement so that a ```debugger``` statement can be added.
