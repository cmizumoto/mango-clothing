import { USER_ACTION_TYPES } from "./user.types";

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// Here we are creating a reducer, it takes the State and Action
export const userReducer = (state = INITIAL_STATE, action) => {
  /* 
  In the action we destructure a type that is a function and the payload that is the state that will be changed
  */
  const { type, payload } = action;
  /* 
    Now every change will trigger the reducers, to avoid things being rendered and updated everytime
    We need to return the state if nothing changes in this reducer, since objects are referenced
    in memory, if the reducer is not called, no renders will be made.
  */
  switch (type) {
    case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null };
    case USER_ACTION_TYPES.SIGN_IN_FAILED:
    case USER_ACTION_TYPES.SIGN_UP_FAILED:
    case USER_ACTION_TYPES.SIGN_OUT_FAILED:
      return {
        ...state,
        error: payload,
      };
    default:
      return state;
  }
};
