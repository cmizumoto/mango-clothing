import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { createAction } from "../../utils/reducer/reducer.utils";

/* 
  NOT USING THUNK ANYMORE - just saga, but leaving to consult info
  https://redux.js.org/usage/writing-logic-thunks
  Thunks will help us to move complex and async logic outside the component, dealing it with a middleware or other files, while having control over the async process, start, success and fail.
  It can also handle multiple dispatch actions in a row or overtime
*/

export const fetchCategoriesStart = () =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
export const fetchCategoriesSuccess = (categoriesArray) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categoriesArray);
export const fetchCategoriesFailed = (error) =>
  createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED, error);
