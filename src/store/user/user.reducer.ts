import { AnyAction } from "redux";
import { USER_ACTION_TYPES } from "./user.types";

import {
  signInFailed,
  signUpFailed,
  signOutFailed,
  signOutSuccess,
  signInSuccess,
} from "./user.action";

import { UserData } from "../../utils/firebase/firebase.utils";

export type UserState = {
  readonly currentUser: UserData | null;
  readonly isLoading: boolean;
  readonly error: Error | null;
};

export const INITIAL_STATE = {
  currentUser: null,
  isLoading: false,
  error: null,
};

// Here we are creating a reducer, it takes the State and Action
export const userReducer = (state = INITIAL_STATE, action: AnyAction) => {
  /* 
  In the action we destructure a type that is a function and the payload that is the state that will be changed
  */
  // const { type, payload } = action;
  /* 
    Now every change will trigger the reducers, to avoid things being rendered and updated everytime
    We need to return the state if nothing changes in this reducer, since objects are referenced
    in memory, if the reducer is not called, no renders will be made.
  */
  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: action.payload,
    };
  }

  if (signOutSuccess.match(action)) {
    return { ...state, currentUser: null };
  }

  if (signInFailed.match(action) || signOutFailed.match(action) || signUpFailed.match(action)) {
    return {
      ...state,
      error: action.payload,
    };
  }

  return state;
};
