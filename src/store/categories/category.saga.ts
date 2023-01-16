import { takeLatest, all, call, put } from "typed-redux-saga/macro";

import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import { fetchCategoriesSuccess, fetchCategoriesFailed } from "./category.action";

import { CATEGORIES_ACTION_TYPES } from "./category.types";

/* 
  THIRD - finally fetch categories async is called
  Will try to ger categories and documents from Firebase
  If it succedes - yields  put(dispatch) the fetchCategoriesSuccess with the categoriesArray
  If it fails - yields put(dispatch) and error
*/
export function* fetchCategoriesAsync() {
  try {
    // Generator cannot receive async await, since generators pause functions
    // call is an effect function, you pass the function you want to run, followed by the parameter
    const categoriesArray = yield* call(getCategoriesAndDocuments);
    // since we cannot dispatch, we will use yield put
    yield* put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield* put(fetchCategoriesFailed(error as Error));
  }
}

// SECOND - this function is called, taking the latest value from fetch categories start, initializing fetchCategoriesAsync
export function* onFetchCategories() {
  // As the name says, take the latest value and return
  yield takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START, fetchCategoriesAsync);
}

// FIRST - we call this generator function, wait for all things inside the all to be finished
export function* categoriesSaga() {
  // all executes everything inside the array passed before moving on
  yield all([call(onFetchCategories)]);
}
