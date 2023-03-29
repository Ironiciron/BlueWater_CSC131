import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBuAVFXRur9FYTSnvsfgJXD2SYk_LovFFs",
    authDomain: "authentication-for-pharmastudy.firebaseapp.com",
    projectId: "authentication-for-pharmastudy",
    storageBucket: "authentication-for-pharmastudy.appspot.com",
    messagingSenderId: "247049922203",
    appId: "1:247049922203:web:e50069a3f705f348be083e",
    measurementId: "G-RW7DL4WKLD"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);