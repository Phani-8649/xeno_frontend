import { auth, provider } from "../firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

export const logout = () => {
  return signOut(auth);
};

export const getUser = () => {
  return auth.currentUser;
};
