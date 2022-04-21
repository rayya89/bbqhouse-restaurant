//NPM Packages
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

//Properties
const firebaseConfig = {
  apiKey: "AIzaSyCseeGz6XD91GvWwu_L-tLcIs9A8rz65tI",
  authDomain: "bbqhouse-restaurant.firebaseapp.com",
  projectId: "bbqhouse-restaurant",
  storageBucket: "bbqhouse-restaurant.appspot.com",
  messagingSenderId: "654675200128",
  appId: "1:654675200128:web:e286462ba8a607d25dfe65"
};

const app = initializeApp(firebaseConfig);
export const fireStore = getFirestore(app);