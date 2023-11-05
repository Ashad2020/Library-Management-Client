import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCV1YtsiXuaEU1AzjAHQmbbY8nxuCYzbo",
  authDomain: "library-management-a18d4.firebaseapp.com",
  projectId: "library-management-a18d4",
  storageBucket: "library-management-a18d4.appspot.com",
  messagingSenderId: "647242861270",
  appId: "1:647242861270:web:42864c9940a2b0df3ed777",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
