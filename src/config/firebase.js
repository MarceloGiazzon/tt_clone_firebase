// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';


const firebaseConfig = {
  apiKey: "AIzaSyADrxjzgoUZd7wzS9MK2QpbeA78AP1rhSs",
  authDomain: "clonett-eea3e.firebaseapp.com",
  projectId: "clonett-eea3e",
  storageBucket: "clonett-eea3e.appspot.com",
  messagingSenderId: "742910941003",
  appId: "1:742910941003:web:80c5a1881188a1bd7d7ace",
  measurementId: "G-WR9FM4NLZ9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db