import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
const NewPassword = () => {
  const [recoveryEmail, setRecoveryEmail] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons name="chevron-back" size={20} color="#fff" />
        <Text style={styles.headerTitle}>Create New Password</Text>
      </View>
    </View>
  );
};

export default NewPassword;
