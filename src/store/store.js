// We are not using redux toolkit, createStore will display as a deprecated feature
// Once I learn more about redux, I will refactor to use RTK
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// Middleware works like any other middleware, they catch actions before hiting the reducer
// Logger middleware will help logging the steps of the reducer
const middleWares = [logger];

// Compose can receive multiple functions and it will execute left to right
const composedEnhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEnhancers);
