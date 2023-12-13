// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAqkIiZLmxBkOnOXOOGM4KrXv8aDcCy5_s",
  authDomain: "otaumart-bf6ef.firebaseapp.com",
  databaseURL: "https://otaumart-bf6ef-default-rtdb.firebaseio.com",
  projectId: "otaumart-bf6ef",
  storageBucket: "otaumart-bf6ef.appspot.com",
  messagingSenderId: "461226652669",
  appId: "1:461226652669:web:565918a95c0cca233edf94",
  measurementId: "G-52EQ4GMC33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default db;
