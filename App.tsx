import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Home, Splash} from './src/screens/Main';
import Login from './src/screens/Auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [userStatus, setUserStatus] = useState('');

  const getUserStatus = async () => {
    try {
      const value = await AsyncStorage.getItem('loggedIn');
      if (value !== null) {
        setUserStatus('true');
      }
    } catch (e) {
      console.log(e);
      setUserStatus('false');
    }
  };

  useEffect(() => {
    getUserStatus();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <MainNavigation status={userStatus} />
    </NavigationContainer>
  );
};

export default App;
