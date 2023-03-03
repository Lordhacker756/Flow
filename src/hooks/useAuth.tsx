import React, {useEffect} from 'react';
import {getAuth, onAuthStateChanged, User} from 'firebase/auth';
import {firebaseConfig} from '../config/firebase';
import {initializeApp} from 'firebase/app';
import {useAppDispatch} from './hooks';
import {userLogin, userLogout} from '../redux/slices/userSlice';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const useAuth = () => {
  const [user, setUser] = React.useState<User | null>(null);

  const dispatch = useAppDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        dispatch(userLogin(user.email));
      } else {
        setUser(null);
        dispatch(userLogout());
      }
    });

    return unsubscribe;
  }, []);

  return user;
};

export default useAuth;
