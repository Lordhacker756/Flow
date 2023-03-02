import React, {useEffect} from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {firebaseConfig} from '../config/firebase';
import {initializeApp} from 'firebase/app';
import AsyncStorage from '@react-native-async-storage/async-storage';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = React.useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        AsyncStorage.setItem('loggedIn', 'true');
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return user;
};

export default useAuth;
