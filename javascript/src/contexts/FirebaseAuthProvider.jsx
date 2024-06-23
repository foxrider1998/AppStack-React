import { useEffect, useReducer } from "react";

import AuthContext from "./FirebaseAuthContext";

import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config";

import {
  GoogleAuthProvider,
  FacebookAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import { User } from "react-feather";

const INITIALIZE = "INITIALIZE";

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const initialState = {
  isAuthenticated: false,
  isInitialized: false,
  user: null,
};

const reducer = (state, action) => {
  if (action.type === INITIALIZE) {
    const { isAuthenticated, user } = action.payload;
    return {
      ...state,
      isAuthenticated,
      isInitialized: true,
      user,
    };
  }

  return state;
};

function AuthProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch({
          type: INITIALIZE,
          payload: { isAuthenticated: true, user },
        });
      } else {
        dispatch({
          type: INITIALIZE,
          payload: { isAuthenticated: false, user: null },
        });
      }
    });
  }, [dispatch]);

  const signIn = async (email, password) => {
    
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      // Access user data
      const user = result.user;
      console.log('Signed in user:', user);
      // Here you can further process user data, like storing it in state or context
      // Define a global variable using let or const

// Attach to window object for global access in browser
    window.globalVariable.User = user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }

  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      // Access user data
      const user = result.user;
      console.log('Signed in user:', user.displayName);
      // Here you can further process user data, like storing it in state or context
      // Define a global variable using let or const

// Attach to window object for global access in browser
    window.globalVariable.User = user;
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }

  };

  const signInWithFaceBook = async () => {
    const provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signInWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    await signInWithPopup(auth, provider);
  };

  const signUp = async (email, password, firstName, lastName) => {
    await createUserWithEmailAndPassword(auth, email, password).then((res) => {
      // You can choose to store additional info to a seperate Firestore collection here,
      // like the firstName or lastName
    });
  };

  const _signOut = async () => {
    await signOut(auth);
  };

  const resetPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const _auth = { ...state.user };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        method: "firebase",
        user: {
          id: _auth.uid,
          email: _auth.email,
          avatar: _auth.avatar,
          displayName: _auth.displayName,
          role: "user",
        },
        signIn,
        signUp,
        signInWithGoogle,
        signInWithFaceBook,
        signInWithTwitter,
        signOut: _signOut,
        resetPassword,
      }}
    >
      {children}
      {console.log(User)}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
