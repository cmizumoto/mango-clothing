import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration - this is provided by firebase
const firebaseConfig = {
  apiKey: "AIzaSyCv83M6pIwccVC31NP9iorNx7VOtozbQQM",
  authDomain: "mango-clothing-db-a701d.firebaseapp.com",
  projectId: "mango-clothing-db-a701d",
  storageBucket: "mango-clothing-db-a701d.appspot.com",
  messagingSenderId: "251825984831",
  appId: "1:251825984831:web:ce15206ab73dffeb182f8a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

/* Provider is the type of login you chose in the firebase authentication, could be github, twitter and other providers */
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

// getAuth is to initialize the authentication process
export const auth = getAuth();

// this popUp that login method utilized by google, small popup to choose your google account
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// getFirestore() retreives the contents from de firestore database
export const db = getFirestore();

// Using this function to retreive data from authentication service
// And passing to the firestore
export const createUserDocumentFromAuth = async (userAuth) => {
  // Doc method asks for 3 parameters, database, collection, identifier/unique id
  // Here we are asking for the document in this database under the users collection with this unique ID
  const userDocRef = doc(db, "users", userAuth.uid);

  // getDoc will try to get the data related to a document
  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot.exists());

  // If the user doesn't exists in the database
  if (!userSnapshot.exists()) {
    // create / set the document with the data from userAuth in the collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // here we try to set this document in our database
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;
};
