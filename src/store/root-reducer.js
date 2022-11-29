/* 
  Guide to reducers
  - reducer.js - Should receive the data in its primite form, right from the api/server
  - selector.js - Will shape the data to be the final version
*/

import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";

/* 
  As the name says we are using the rootreducer to combine all the reducers we have created so far
*/
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
});
