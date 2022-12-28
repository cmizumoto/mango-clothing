import { CATEGORIES_ACTION_TYPES, Category } from "./category.types";

import { CategoryAction } from "./category.action";

// Here we show how CATEGORY_INITIAL_STATE types are
export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

// And make the initial state be the CategoriesState
export const CATEGORY_INITIAL_STATE: CategoriesState = {
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
  // Since our Action was not receiving a payload type, we can remove and specify the action inside our switch
  // With action.type and action.payload
  // const { type, payload } = action;
  switch (action.type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return { ...state, isLoading: true };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: action.payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILED:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
};
