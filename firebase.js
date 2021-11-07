import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7ns60uiP6tjbTs-A6X4kYP_Cyd0rhVOY",
  authDomain: "uber-next-react-clone.firebaseapp.com",
  projectId: "uber-next-react-clone",
  storageBucket: "uber-next-react-clone.appspot.com",
  messagingSenderId: "533854665965",
  appId: "1:533854665965:web:6e72eff2a388936eeee0e4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const Auth = getAuth();

export { app, provider, Auth };
