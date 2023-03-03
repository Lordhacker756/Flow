import React, {useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import useAuth from '../hooks/useAuth';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MainNavigation() {
  const [status, setStatus] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const user = await AsyncStorage.getItem('user');
      if (user) {
        setStatus(true);
      } else {
        setStatus(false);
      }
    };
    checkUser();
    console.log(status);
  }, []);

  const fireUser = useAuth();

  return fireUser ? <MainStack /> : <AuthStack />;
}
