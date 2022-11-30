import { createSelector } from "reselect";

/* 
  In a example, if a user logout at the Shop route, all selectors will be fired.
  Now that we setup the reselect library, since nothing has changed in the category,
  Once it reaches the selectCategories, this selector will already return the selectCategoryReducer
  It won't even run the second argument of the function.
*/
const selectCategoryReducer = (state) => state.categories;

/* 
  Here we are using the reselect library to create a memoized function to avoid calculating the same state when other selectors are fired.
  This function will receive two arguments:
  1st argument is the selector that we are going to cache
  2nd argument is a function that receives the return value of selectCategoriesReducer
*/
export const selectCategories = createSelector(
  [selectCategoryReducer],
  (categoriesFromReducer) => categoriesFromReducer.categories
);

export const selectCategoriesMap = createSelector([selectCategories], (categories) =>
  categories.reduce((accumulator, category) => {
    const { title, items } = category;
    accumulator[title.toLowerCase()] = items;
    return accumulator;
  }, {})
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoryReducer],
  (categoriesFromReducer) => categoriesFromReducer.isLoading
);
