import {
  useState,
  useEffect,
  useContext,
  createContext,
  ReactNode,
} from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  confirmPasswordReset,
  sendPasswordResetEmail,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { IAuth } from "../models/auth.model";
import { getFirestore } from "firebase/firestore/lite";

const app = initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
});

export const db = getFirestore(app);

const AuthContext = createContext<IAuth>({} as IAuth);

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children?: ReactNode }) => {
  const auth = getAuth();
  const [user, setUser] = useState<any | boolean>(null);
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(true);

  const login = (email: string, password: string) => {
    return signInWithEmailAndPassword(auth, email, password).then(
      (response: any) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const signup = (email: string, password: string) => {
    return createUserWithEmailAndPassword(auth, email, password).then(
      (response: any) => {
        setUser(response.user);
        return response.user;
      }
    );
  };

  const logout = () => {
    return signOut(auth).then(() => {
      setUser(false);
    });
  };

  const passwordResetEmail = (email: string) => {
    return sendPasswordResetEmail(auth, email).then(() => {
      return true;
    });
  };

  const confirmPassword = (code: any, password: string) => {
    return confirmPasswordReset(auth, code, password).then(() => {
      return true;
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user: any) => {
      setUser(user);
      setIsAuthenticating(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    isAuthenticating,
    login,
    signup,
    logout,
    passwordResetEmail,
    confirmPassword,
  } as unknown as IAuth;

  return (
    <AuthContext.Provider value={value}>
      {!isAuthenticating && children}
    </AuthContext.Provider>
  );
};
