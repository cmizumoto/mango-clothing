/* 
  Guide to reducers
  - reducer.js - Should receive the data in its primite form, right from the api/server
  - selector.js - Will shape the data to be the final version
  - types.js - It is a list of actions that we can make in this redux "context"
  - actions.js - Is the file that will create the action, using the types that were listed earlier
*/
import { combineReducers } from "redux";

import { userReducer } from "./user/user.reducer";
import { categoriesReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

/* 
  As the name says we are using the rootreducer to combine all the reducers we have created so far
*/
export const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
