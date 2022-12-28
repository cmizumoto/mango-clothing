import { CATEGORIES_ACTION_TYPES } from "./category.types";

import { CategoryAction } from "./category.action";

export const CATEGORY_INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

/* 
  By putting the "as CategoryAction" it becomes a Discriminating Union (https://basarat.gitbook.io/typescript/type-system/discriminated-unions)
  And will only accept the only 3 actions we set in category.action (FetchCategoriesStart, FetchCategoriesSuccess, FetchCategoriesFailed)
*/
export const categoriesReducer = (
  state = CATEGORY_INITIAL_STATE,
  action = {} as CategoryAction
) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};
