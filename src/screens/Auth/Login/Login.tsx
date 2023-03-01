import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React from 'react';
import Ioncicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.splashImage}
        source={require('../../../assets/Frame.png')}
      />
      <Text style={styles.heading}>Let's Get You In!</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} secureTextEntry />
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.8 : 1,
          },
          styles.login,
        ]}>
        <Text style={styles.loginText}>Login</Text>
        <Ioncicons name="chevron-forward" size={20} color="#fff" />
      </Pressable>
      <Pressable
        style={({pressed}) => [
          {
            opacity: pressed ? 0.8 : 1,
            marginVertical: 15,
          },
        ]}
        onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.signUpBtnText}>Forgot Password ?</Text>
      </Pressable>
      <KeyboardAvoidingView style={styles.row}>
        <Text style={styles.signUpText}>Don't have an account?</Text>
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
          ]}
          onPress={() => navigation.navigate('Register')}>
          <Text style={styles.signUpBtnText}>Register</Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Login;
