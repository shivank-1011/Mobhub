import { signInWithGoogle, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../configs/firebase';

import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const GoogleAuthContext = createContext(null);
export const GoogleAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const signInWithGoogleHandler = async () => {
    try {
      const userCredential = await signInWithGoogle(auth);
      setUser(userCredential.user);
      navigate('/home');
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (user) {
      console.log('User signed in:', user);
    }
  }, [user]);

  return (
    <GoogleAuthContext.Provider value={{ user, signInWithGoogleHandler }}>
      {children}
    </GoogleAuthContext.Provider>
  );
};



