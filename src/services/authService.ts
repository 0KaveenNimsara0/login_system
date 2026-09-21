import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,} from "firebase/auth";
import config from "../config/firebase";

const auth = getAuth(config);

//function to sign in with google 
const loginWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    return {
      success: true,
      user: result.user,
      error: "",
    };
  } 
  // handel to error get login fail 
  catch (error) {
    return {
      success: false,
      user: null,
      error: error instanceof Error ? error.message : "Google login failed.",
    };
  }
};


// funtion to handel the logout 
const logoutUser = async () => {
  try {
    await signOut(auth);
    return { success: true, error: "" };
  } 
  //handel logout failure
  catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Logout failed.",
    };
  }
};


export default {
  loginWithGoogle,
  logoutUser,
};