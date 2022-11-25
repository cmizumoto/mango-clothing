import { createContext, useEffect, useReducer } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

// As the actual value you want to access
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

// Here we are creating a reducer, it takes the State and Action
const userReducer = (state, action) => {
  // In the action we destructure a type that is a function and the payload that is the state that will be changed
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in useReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // Remeber that the first argument is the State and it is an object, in this case we are destructuring
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE);

  // setCurrentUser is comming from the context above
  const setCurrentUser = (user) => {
    // Dispatch will take the action, and when will call the useReducer with the respective type
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  // Using this as an aliass
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
