import { USER_ACTION_TYPES } from "./user.types";
import { createAction } from "../../utils/reducer/reducer.utils";

// setCurrentUser is comming from the context above
export const setCurrentUser = (user) => {
  // Dispatch will take the action, and when will call the useReducer with the respective type
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
