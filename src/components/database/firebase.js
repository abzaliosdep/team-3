import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqkIiZLmxBkOnOXOOGM4KrXv8aDcCy5_s",
  authDomain: "otaumart-bf6ef.firebaseapp.com",
  databaseURL: "https://otaumart-bf6ef-default-rtdb.firebaseio.com",
  projectId: "otaumart-bf6ef",
  storageBucket: "otaumart-bf6ef.appspot.com",
  messagingSenderId: "461226652669",
  appId: "1:461226652669:web:565918a95c0cca233edf94",
  measurementId: "G-52EQ4GMC33"
}

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
