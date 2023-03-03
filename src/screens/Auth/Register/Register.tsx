import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Pressable,
  Image,
  KeyboardAvoidingView,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import Ioncicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const auth = getAuth();

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 3000);
  }, [error]);

  const handleRegister = async () => {
    setLoading(true);
    if (credentials.email === '' || credentials.password === '') {
      setError('Please fill in all fields');
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password,
        );
        await AsyncStorage.setItem('user', 'true');
        setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.splashImage}
        source={require('../../../assets/Frame.png')}
      />
      <Text style={styles.heading}>Create Your Account</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
        value={credentials.email}
        onChangeText={text => setCredentials({...credentials, email: text})}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        value={credentials.password}
        onChangeText={text => setCredentials({...credentials, password: text})}
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {loading ? (
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: 'grey',
            },
            styles.signup,
          ]}
          disabled>
          <Text style={styles.signupText}>Signing Up...</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
            styles.signup,
          ]}
          onPress={handleRegister}>
          <Text style={styles.signupText}>Sign Up</Text>
          <Ioncicons name="chevron-forward" size={20} color="#fff" />
        </Pressable>
      )}
      <KeyboardAvoidingView style={styles.row}>
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
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Register;
