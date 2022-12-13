import { all, call } from "redux-saga/effects";

import { categoriesSaga } from "./categories/category.saga";
import { userSagas } from "./user/user.saga";

/* 
    With the categories saga configured
    We import in the root-saga, doing the same thing, yield all(call) since is an async function
*/
export function* rootSaga() {
  yield all([call(categoriesSaga), call(userSagas)]);
}
