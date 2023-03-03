import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {Button} from 'react-native';
import {getAuth, signOut} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const auth = getAuth();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Logout"
        onPress={() => {
          signOut(auth)
            .then(() => {
              console.log('Signed out');
              AsyncStorage.removeItem('user');
            })
            .catch(error => {
              console.log(error);
            });
        }}
      />
    </View>
  );
};

export default Home;
