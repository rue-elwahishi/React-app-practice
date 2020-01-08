import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA-rU6SZyVQC0e_JUJ57VD8Wn6kvGAXjPQ",
  authDomain: "shop-db-c067e.firebaseapp.com",
  databaseURL: "https://shop-db-c067e.firebaseio.com",
  projectId: "shop-db-c067e",
  storageBucket: "shop-db-c067e.appspot.com",
  messagingSenderId: "414332307517",
  appId: "1:414332307517:web:caf3655c6e56a2eb31c254",
  measurementId: "G-XB4NL4NSK7"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();
// gives us access to new google auth provider class from auth library
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
