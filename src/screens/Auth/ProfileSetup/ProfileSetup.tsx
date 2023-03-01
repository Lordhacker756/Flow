import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const ProfileSetup = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fill Your Profile</Text>
      <Text style={styles.subtitle}>
        Don't worry, you can always change it later, and you can skip it for now
      </Text>
      <TextInput style={styles.input} placeholder="Name" />
      <TextInput style={styles.input} placeholder="Nickname" />
      <TextInput style={styles.input} placeholder="Email" />
      <TextInput style={styles.input} placeholder="Phone Number" />

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.skipBtn}>
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
