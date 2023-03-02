import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import useAuth from '../hooks/useAuth';

export default function MainNavigation() {
  const user = useAuth();

  return user ? <MainStack /> : <AuthStack />;
}
