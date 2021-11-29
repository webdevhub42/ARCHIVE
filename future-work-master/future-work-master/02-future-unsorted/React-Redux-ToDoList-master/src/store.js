import { createStore } from "redux";
import tasksReducer from "./reducers/tasksReducer";
import { loadState, saveState } from "./localStorage";

const preloadedState = loadState();
export const store = createStore(tasksReducer, preloadedState);

store.subscribe(() => saveState(store.getState()));

console.log(store.getState());

// export default store;
