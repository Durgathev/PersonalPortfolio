import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCR3PngtDYiwTE1opkoh_UnJlxkR16tayo",
  authDomain: "dd-portfolio-129a1.firebaseapp.com",
  projectId: "dd-portfolio-129a1",
  storageBucket: "dd-portfolio-129a1.appspot.com",
  messagingSenderId: "450775597341",
  appId: "1:450775597341:web:8e10c9270e99fc0fa8a1f4",
  measurementId: "G-02ZJR60TC0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };
