import { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
// eslint-disable-next-line react/prop-types
export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  // console.log(user);
  const [loading, setLoading] = useState(true);
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const authentications = {
    googleLogin,
    createUser,
    loginUser,
    logOut,
    user,
    loading,
  };

  return (
    <AuthContext.Provider value={authentications}>
      {children}
    </AuthContext.Provider>
  );
}
