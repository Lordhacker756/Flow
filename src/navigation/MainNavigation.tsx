import React, {useEffect, useState} from 'react';
import AuthStack from './AuthStack';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';

export default function MainNavigation() {
  const userStatus = useSelector((state: any) => state.user);
  console.log('Featching user state', userStatus);

  return userStatus.user === 'true' ? <MainStack /> : <AuthStack />;
}
