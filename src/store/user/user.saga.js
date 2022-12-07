import { takeLatest, put, all, call } from "@redux-saga/core/effects";

import { USER_ACTION_TYPES } from "./user.types";

import { signInSucess, signInFailed } from "./user.action";

import { getCurrentUser, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";

/* 
    Saga falls in the same structure as the react thunk, but using generators
*/

export function* getSnapshotFromUserAuth(userAuth, aditionalDetails) {
  try {
    // Always use call to invoke functions, make API requests, call other sagas and async functions
    // call structure: call(function, ...arguments)
    const userSnapshot = yield call(createUserDocumentFromAuth, userAuth, aditionalDetails);
    // put structure: put(channel, action/dispatch)
    yield put(signInSucess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield call(getCurrentUser);
    if (!userAuth) return;
    yield call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* onCheckUserSession() {
  // takeLatest structure: takeLatest(pattern, saga, ...arguments);
  //   if this function run multiple times, it will only return the latest value of the stack
  yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
  // all structure: all([...effects])
  // this will run multiple effects in parallel and wait for all of them to complete
  yield all([onCheckUserSession]);
}
