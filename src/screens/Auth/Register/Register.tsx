import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
} from 'react-native';
import React from 'react';
import Ioncicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const Register = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.splashImage}
        source={require('../../../assets/Frame.png')}
      />
      <Text style={styles.heading}>Create Your Account</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.8 : 1,
          },
          styles.signup,
        ]}
        onPress={() => navigation.navigate('ProfileSetup')}>
        <Text style={styles.signupText}>Sign Up</Text>
        <Ioncicons name="chevron-forward" size={20} color="#fff" />
      </Pressable>
      <View style={styles.row}>
        <Text style={styles.LogInText}>Already have an account?</Text>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.logInBtnText}>Login</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Register;
