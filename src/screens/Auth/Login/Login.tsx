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
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth';

const auth = getAuth();

const Login = ({navigation}) => {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState('');

  useEffect(() => {
    setTimeout(() => {
      setError('');
    }, 5000);
  }, [error]);

  const handleLogin = async () => {
    setLoading(true);
    if (credentials.email === '' || credentials.password === '') {
      setError('Please fill in all fields');
    } else {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          credentials.email,
          credentials.password,
        );
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
      <Text style={styles.heading}>Let's Get You In!</Text>
      <TextInput
        placeholder="Email"
        style={styles.input}
        color="white"
        value={credentials.email}
        placeholderTextColor="grey"
        onChangeText={(text: string) =>
          setCredentials({...credentials, email: text})
        }
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry
        placeholderTextColor="grey"
        color="white"
        onChangeText={(pass: string) =>
          setCredentials({...credentials, password: pass})
        }
      />
      {error !== '' && <Text style={styles.error}>{error}</Text>}
      {loading ? (
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: 'grey',
            },
            styles.login,
          ]}
          disabled>
          <Text style={styles.loginText}>Loggin In...</Text>
        </Pressable>
      ) : (
        <Pressable
          style={({pressed}) => [
            {
              opacity: pressed ? 0.8 : 1,
            },
            styles.login,
          ]}
          onPress={handleLogin}>
          <Text style={styles.loginText}>Login</Text>
          <Ioncicons name="chevron-forward" size={20} color="#fff" />
        </Pressable>
      )}

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
