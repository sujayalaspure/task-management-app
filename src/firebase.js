import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const provider = new GoogleAuthProvider();

// const notesRef = collection(db, "notes");

// const auth = getAuth();

export default app;
// export { db, Timestamp, provider, notesRef, auth, signInWithPopup };
