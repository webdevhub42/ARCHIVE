# Redux Explained
Redux is a Javascript framework for managing the frontend state of a web application. It allows us to store information in an organized manner in a web app and to quickly retrieve that information from anywher ein the app. Redux is modleed on a few previosu web technologies including Elm and Flux.

Advantages of Redux include:
* It simpliefies some of the more cumbersonme aspects of Flux
* It is very lightweight; the library only takes up 2 kbs
* It is very fast (the time to insert or retieve data is low)
* It is predictable (interacting with the data store in the same way to repeatedly will produce the same effect)

# Where did Redux come form?
Redux was created by Dan Abramov in 2015. It was initally intedned as an expreiment to create a simplifed version of Flux. Abramov wanted to remove some of what he saw as the unnecesarry boilerplate code that was required to create a Flux app.

Abramov also wanted to eliminate some of the aspects of the devleoment he found frustrating. When trying to debug a web app, one must often go through the seris of steps that cause the bug to occur each time the code is chaged. This quickly becomes reptetive and frustrating. Abramov envisioned dev tolls that would sallow one to undo or replay a series of acitons at the end click of a  button. This idea became the Redux DevTools.

The reason this works is that Reudx updates the state using prure functions called reducers (see below for definitions), so one can simply replay a series of acitons and be guaranteed to arrive at the same field state. As Redux was developed it also became more conveniient to use a single object tos tare the state, as opposted to tradiotnal Flux which uses multiple stores.

These design choices allowed for the creation of an ecosystem of powerful Redux tool extensions. Over time three principles were recognized as central to the philosohphy of Reux. They are:
* A single Source of Truth: The state for an entire Redux app is stored in a single, plain Javascript object.
* State is Read Only: The state object cannot be directly modified. Instead it is modified by dispatching actions.
* Changes Are Made with Pure Functions: The reducers that receive the actions and return updated state are pure functions of the old state and the aciotn.

Beyond this, a guding meta-philosophy of Redux is the idea that in software library restrictions on the way state can be stored and updated, but in return it allows easy implementation of a number of powerful features that would be extremely difficult to write using a less restrictive framework.

# When is it appropriate to use Redux?
Initially, Redux grew in popularity, quickly moving beyong its initial plan as an experiment. As of early 2016 it had over 3,000,000 downloads. The Redux repository on GitHub has over 50,000 stars, and Redux is now used by a number of companies including Exana, Patreon, and ClassPass.

Since the introduction of Redux, Context as been added to React. Context, like Redux, gives you a way to store and majnage global state in your React applications. For projects with simpler global state requirements, Context has become a popular alternative to using Redux.

Context is built into React so there's no need to install an additional library as a dependancy. Context is also simpler overall and genrally requires less work to get up and runing. All that being sad, for pprjeocts with more sophisticated global state requirements, Redux reamins a popular option. Redux offers greater flexibility with suport for middleware and richer developer tools in the form of the Redux DevTools.

# Vocabulary
Learning how to use Redux requires you to understand a fair amount of temrinology. For now, don't worry about memorizing all of the following terms; it's good enough to just have a genral awareness. You'll revisit each of these terms as you work your way through this lesson.

## State
Ex: "Redux is a state manager."

The State of a program means all the information stored by that program at a particular point in time. It is gernally used to refer to the data stored by the program at a particular instance in time, as sopposted to the logic of the program, which doesn't change over time. The job of Redux is to store the state of your app and make it available to entire app.

## Store
Ex; "Redux sotre state in a single store."

The Redux store is a single Javascript object with a few methos, including ```getState```, ```dispatching(aciton)```, and ```subscribe(listener)```. Any state you want Redux to handle is held in the store.

## Actions
Ex: "The redux store is updated by dispatching actions."

An aciton of a POJO(plain old Javascript object) with a ```type``` property. Acitons contain information that can be used to update the store. They can be dispatched, i.e. sent to the store, in response to the user aciotns or AJAX requests. Typically Redux apps use functions called aciton creators that return acitons. Aciotn creators can take arugements which allow them to cutomize the data contained in the actions they generate.

## Pure functions
Ex: "Redux reducers are pure functions"

A function is pure if its behavior depends only its arguments and it has no side effects. This means the function can't depend on the value of any variables that aren't passed to it as arguments, and it can't alter the state of the program or any variable existing outside itself. It simply takes in arguments and returns a value.

## Reducer
Ex: "Redux handles actions using reducers."
A reducer is a function that is called each time an action is dispatched. The reducer receives an action and the current state as arguments and returns an updated state. Its the one that has all those switch and case statements and the default state = empty array.

Redux reducers are required to be pure functions of the dispatched action and the current state. This makes their behavior very predictable and allows their effects to potentially be reversed.

## Middleawre
Ex: "You can custoimze your response to dispatched actions using middleware."

Middleware is an optional component of Redux taht allows custom responses to dispatched actions. When an action is dispatched, it passes through each middleware that has been added to the state. The middleware can take some aciton in response and choose whether or not to pass the action on down to the chain. Behind the scenes, the middleware actually replaces the dispatch method of the store with a customized version. there is a large ecosystem of existing middleware ready to be plugged into any Redux projects. One example is a logger taht records each action before passing it on the reducer. Perhaps the most common use for middleware is to dispatch asynchronous requests to a server.

## Time traveling dev tools
Ex: "Redux has time traveling dev tools."

Redux reducers are pure fucntions of the dispatched aciton and the current state. This means that if one were to store a liste of the previous states over time and the acitons  that had been dispaatched, one could retroactively cancel an aciton and recaluculate the ate as if that aciton had never been dispatched. this is precisely the functionality that the  Redux DevTools provide. The dev tools can be added as middleware to any Redux project. They allow you to look back through the history of the state and toggle past actions on and off to see a live recalculation of the state. This abiility to revert to a previosu state is what ismwant by time travel.

## Thunks

Ex: "Thunks are a convenient format for taking asynchronous actions in Redux"

The traditional approach to middleware closely parallels the format of reducers. The actions being dispatched are POJOs with types and various middleware files are waiting to receive them. these files check the type of the aciotn using a case statement just like reducers.

Thunks are an alternative approach. A thunk is a general concept in a computer science referring to a function whose primary purpose is simply to call another function. In Reudx a thunk aciton creator returns a fucntion rather than an object. When they are dispatched, thunk aciotns are intercepted by a piece of middleware that simply checks if each aciotn is a function. Iif it is, tahta fucntion is called with the state and dispatched as arguments, otherwise it is passed on down the chain. Thunks are most commonly used to make asynchronous API requests.

# What you learned
in this aritcle, you learned what Redux is and where it came form. You also learned when it's approopriate to use Redux and some of the vocabular terms used by Redux.

# See also
The official Redux documentation http://redux.js.org/ is a great resource for learning more about Redux. To see who'se using Redux, see this page on StackShare.
