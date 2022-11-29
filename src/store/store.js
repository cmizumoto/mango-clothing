// We are not using redux toolkit, createStore will display as a deprecated feature
// Once I learn more about redux, I will refactor to use RTK
import { compose, createStore, applyMiddleware } from "redux";
// import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

/* 
    Creating this middleware logger to understand better the lifecycle of the redux;
    Now in the category component we will see:
    - Initial render
    - Selector from redux is fired

useEffect does not trigger a re-render, because its initial value is an empty object or array
it will evaluate undefined === undefined // true
    - useEffect is fired calling setProducts
    - Middleware Type is logged
    - Middleware Payload is logged
    - Middleware currentState is logged

Here is where the next(action) is executed, triggering all the useSelectors consequently causing another re-render
    - Selector from redux is fired again
    - Component is re-rendered

    - Middleware Next State is logged
*/
const loggerMiddleware = (store) => (next) => (action) => {
  if (!action.type) {
    return next(action);
  }

  console.log("type: ", action.type);
  console.log("payload: ", action.payload);
  console.log("currentState: ", store.getState());

  next(action);
  // Only after action runs, this console.log will run
  console.log("next state: ", store.getState());
};

// Middleware works like any other middleware, they catch actions before hiting the reducer
// Logger middleware will help logging the steps of the reducer
const middleWares = [loggerMiddleware];

// Compose can receive multiple functions and it will execute left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
