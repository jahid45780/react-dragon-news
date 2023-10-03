// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAoF9kB_S5RoBxCA6D5kZJIeE1JkyrNuAY",
  authDomain: "react-dragon-news-3468a.firebaseapp.com",
  projectId: "react-dragon-news-3468a",
  storageBucket: "react-dragon-news-3468a.appspot.com",
  messagingSenderId: "347597686711",
  appId: "1:347597686711:web:fe1146e379b45f5079ca32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app