import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {doc, setDoc} from 'firebase/firestore';
import {db} from '../../../config/firebase';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileSetup = () => {
  const [userDetails, setUserDetails] = useState({
    name: '',
    nickname: '',
    email: '',
    phone: '',
  });

  const handleProfileSetup = async () => {
    try {
      const docRef = doc(db, 'users', userDetails.email);
      await setDoc(docRef, {
        name: userDetails.name,
        nickname: userDetails.nickname,
        email: userDetails.email,
        phone: userDetails.phone,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const skipSetup = () => {
    AsyncStorage.setItem('profileCompleted', 'pending');
    console.log('skipped');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill Your Profile</Text>
      <Text style={styles.subtitle}>
        Don't worry, you can always change it later, and you can skip it for now
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={userDetails.name}
      />
      <TextInput
        style={styles.input}
        placeholder="Nickname"
        value={userDetails.nickname}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={userDetails.email}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={userDetails.phone}
      />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.skipBtn} onPress={skipSetup}>
          <Text style={styles.btnText}>Skip</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startBtn}>
          <Text style={styles.btnText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileSetup;
