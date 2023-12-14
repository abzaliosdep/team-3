// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqkIiZLmxBkOnOXOOGM4KrXv8aDcCy5_s",
  authDomain: "otaumart-bf6ef.firebaseapp.com",
  databaseURL: "https://otaumart-bf6ef-default-rtdb.firebaseio.com",
  projectId: "otaumart-bf6ef",
  storageBucket: "otaumart-bf6ef.appspot.com",
  messagingSenderId: "461226652669",
  appId: "1:461226652669:web:2e612cbbb15994ee3edf94",
  measurementId: "G-6B42F0PRBB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // Инициализация Firestore

export default db; // Экспорт для использования в других файлах
