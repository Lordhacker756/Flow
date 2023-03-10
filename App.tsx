import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Home, Splash} from './src/screens/Main';
import Login from './src/screens/Auth/Login';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './src/navigation';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import {getUser} from './src/redux/slices/userSlice';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Running getUser()');
    getUser();
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return isLoading ? (
    <Splash />
  ) : (
    <NavigationContainer>
      <Provider store={store}>
        <MainNavigation />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
