import { initializeApp } from "firebase/app";

// Auth related
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";

// Firestore
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
  QueryDocumentSnapshot,
} from "firebase/firestore";

import { Category } from "../../store/categories/category.types";

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
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

// getAuth is to initialize the authentication process
export const auth = getAuth();

// this popUp that login method utilized by google, small popup to choose your google account
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

// getFirestore() retreives the contents from de firestore database
export const db = getFirestore();

// We know that the guarantee property of this objectToAdd is a string
export type ObjectToAdd = {
  title: string;
};
// Using this function to grab the Shop Data JS and populate the firestore database
// Note that we are using these methods because we didn't had a previous database, we are just populating one to continue the examples, but this could be used to store more data.
export const addCollectionAndDocuments = async <T extends ObjectToAdd>(
  collectionKey: string,
  objectsToAdd: T[]
  // Since we are using Async functions, it will always return a promise, in this case since we are sending to a batch, we don't return, so it is specified with <void>
): Promise<void> => {
  // The collection key is the collection name, using almost the same structure as the Auth methods.
  const collectionRef = collection(db, collectionKey);
  // writeBatch uses a transaction like exchange, both of the writes must be valid in order to be completed
  const batch = writeBatch(db);

  // loop each object and save using the doc method like the auth one
  objectsToAdd.forEach((object) => {
    // Pulling the title from the object
    const docRef = doc(collectionRef, object.title.toLowerCase());
    // Setting the title and the object in the database
    batch.set(docRef, object);
  });

  // commit the batch and wait till everything is done
  await batch.commit();
  console.log("done");
};

// Now we can get back the data stored
export const getCategoriesAndDocuments = async (): Promise<Category[]> => {
  // same as above, we are selecting the collection we want to fetch
  const collectionRef = collection(db, "categories");
  // get a query that returns the collectionRef above
  const q = query(collectionRef);

  // finally we try to get the snapshot (data in a structure) from firebase
  const querySnapshot = await getDocs(q);
  // Here we are mapping and creating the categories arrays with the titles and item objects to be received in our website
  return querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as Category);
};

export type AdditionalInformation = {
  displayName?: string;
};

export type UserData = {
  createdAt: Date;
  displayName: string;
  email: string;
};

// Using this function to retreive data from authentication service
// And passing to the firestore
export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionalInformation = {} as AdditionalInformation
): Promise<void | QueryDocumentSnapshot<UserData>> => {
  if (!userAuth) return;
  // Doc method asks for 3 parameters, database, collection, identifier/unique id
  // Here we are asking for the document in this database under the users collection with this unique ID
  const userDocRef = doc(db, "users", userAuth.uid);

  // getDoc will try to get the data related to a document
  const userSnapshot = await getDoc(userDocRef);

  // If the user doesn't exists in the database
  if (!userSnapshot.exists()) {
    // create / set the document with the data from userAuth in the collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      // here we try to set this document in our database
      await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserData>;
};

/* 
  Create user with Email and Password
*/
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUSerWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe();
        resolve(userAuth);
      },
      reject
    );
  });
};
