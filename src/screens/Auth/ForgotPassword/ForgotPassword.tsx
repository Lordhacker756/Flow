import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
const ForgotPassword = () => {
  const [recoveryEmail, setRecoveryEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Email To Send OTP</Text>
      <TextInput placeholder="Registered Email" style={styles.input} />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Send OTP</Text>
        <Ionicons name="arrow-forward" size={25} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;
