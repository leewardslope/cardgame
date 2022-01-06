import { createContext, useEffect, useState } from 'react';
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile
} from 'firebase/auth';

import { auth } from '../firebase';
import axios from 'axios';

//  Defining all auth related providers
const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = () => signInWithPopup(auth, googleProvider);

export const traditionalSignUp = (email, password) =>
  createUserWithEmailAndPassword(auth, email, password);

export const traditionalSignIn = (email, password) =>
  signInWithEmailAndPassword(auth, email, password);

export const signOutUser = () => signOut(auth);

export const updateDisplayName = (name) => {
  updateProfile(auth.currentUser, {
    displayName: name
  });
};

//  Context API and useContext hook
export const userAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [token, setToken] = useState();

  const [userAuthenticated, setUserAuthenticated] = useState(
    false || window.localStorage.getItem('userAuthenticated')
  );

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (user) {
        setUserAuthenticated(true);
        window.localStorage.setItem('userAuthenticated', true);
        user?.getIdToken().then((res) => setToken(res));
      } else {
        setUserAuthenticated(false);
        window.localStorage.setItem('userAuthenticated', false);
      }
    });

    return unsubscribe;
  }, [user]);

  useEffect(() => {
    // A small sync request to backend to store a firebase uid and email in mongodb
    if (token) {
      let config = {
        headers: {
          Authorization: 'Bearer ' + token
        }
      };

      (async () => {
        try {
          await axios.post('/api/sync', {}, config);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [token]);
  return (
    <userAuthContext.Provider value={{ user, token, userAuthenticated }}>
      {children}
    </userAuthContext.Provider>
  );
};

export default UserAuthContextProvider;
