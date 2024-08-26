// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAPHDKZIjsFylRRlifEy2FxbvsSFQ2JWj4",
  authDomain: "codalambda.firebaseapp.com",
  projectId: "codalambda",
  storageBucket: "codalambda.appspot.com",
  messagingSenderId: "690198169460",
  appId: "1:690198169460:web:fafe4602dc109926638e21",
  measurementId: "G-FVTXEDEL8H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
