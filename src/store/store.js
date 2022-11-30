// We are not using redux toolkit, createStore will display as a deprecated feature
// Once I learn more about redux, I will refactor to use RTK
import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

// Here we use redux-persist to store the user session (cart items) in the local storage
// https://www.npmjs.com/package/redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware works like any other middleware, they catch actions before hiting the reducer
// Logger middleware will help logging the steps of the reducer
// Using process.env.NODE_ENV we can avoid logging when we deploy
// And .filter(Boolean) will return an empty array if it is true
const middleWares = [process.env.NODE_ENV !== "production" && logger].filter(Boolean);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Compose can receive multiple functions and it will execute left to right
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

export const persistor = persistStore(store);
