// We are not using redux toolkit, createStore will display as a deprecated feature
// Once I learn more about redux, I will refactor to use RTK
import { compose, createStore, applyMiddleware, Middleware } from "redux";
// Here we use redux-persist to store the user session (cart items) in the local storage
// https://www.npmjs.com/package/redux-persist
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./root-reducer";
import { rootSaga } from "./root-saga";

/* 
  We will be using typeof because it will return what the value really is, if we only declare without typeof, typescript won't understand what is being returned and it will be interpreted as a type
*/
export type RootState = ReturnType<typeof rootReducer>;

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

type ExtendedPersistConfig = PersistConfig<RootState> & {
  whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Middleware works like any other middleware, they catch actions before hiting the reducer
// Logger middleware will help logging the steps of the reducer
// Using process.env.NODE_ENV we can avoid logging when we deploy
// And .filter(Boolean) will return an empty array if it is true
const middleWares = [process.env.NODE_ENV !== "production" && logger, sagaMiddleware].filter(
  (middleware): middleware is Middleware => Boolean(middleware)
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

// Compose can receive multiple functions and it will execute left to right
const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(persistedReducer, undefined, composedEnhancers);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
