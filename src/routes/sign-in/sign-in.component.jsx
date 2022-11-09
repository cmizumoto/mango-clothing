import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

import {
  auth,
  signInWithGooglePopup,
  // signInWithGoogleRedirect,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils";

/* Creating user in the firestore */
const SignIn = () => {
  // /* This useEffect unsures that when the user comes back from the google redirect, this code executes and we receive the necessary information to create the user in the data base */
  // useEffect(async () => {
  //   const response = await getRedirectResult(auth);
  //   if (response) {
  //     const userDocRef = await createUserDocumentFromAuth(response.user);
  //   }
  // }, []);

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };
  /*  const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    console.log({ user });
  }; */
  return (
    <div>
      <h1>Sign in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/* <button onClick={logGoogleRedirectUser}>Sign in with Google Redirect</button> */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
