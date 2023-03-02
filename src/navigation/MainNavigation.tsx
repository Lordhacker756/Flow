import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import useAuth from '../hooks/useAuth';

export default function MainNavigation({status}) {
  const user = useAuth();
  console.log(status);
  return status === 'true' && user ? <MainStack /> : <AuthStack />;
}
