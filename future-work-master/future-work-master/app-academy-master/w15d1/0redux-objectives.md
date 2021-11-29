# Redux Learning Objectives: Part 1
You've been using React's Context API to manage global state to share the same information across multiple components. Reudx, like Context, gives youa  way to store and manage global state in your React applications. Even though Context has become a popular option since its introduction, Redux remains a popular option for proejcts with sopohisticated global state requirements.

After reading and practicing how to use Redux,  you should be able to:

* Describe the Redux data cycle
* Describe the role of the store in the Redux architecture
* Explain what a reducer is
* Use the ```createStore``` method to create an instance of a Redux store.
* Use the ```store.dispatch``` method to dispatch an action to triger a state update
* Use the ```store.subscribe``` method to listen for state updates
* Use the ```store.getState``` method to get the current state
* Use a ```switch``` statement within a reducer function to handle multiple action types
* Describe why it's important for a reducer to avoid mutating the current state when creating the next state
* Write an action creator function to facilitate in the creation of aciton objects
* Use constants to define aciton types to prevent simple typos in action type string literals.
