import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput} from 'react-native';
import {TouchableOpacity} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const ForgotPassword = ({navigation}) => {
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [isValid, setIsValid] = useState(false);
  const [emailsent, setEmailSent] = useState(false);
  const [showError, setShowError] = useState(false);
  const [otp, setOtp] = useState('');
  const [validOpt, setValidOpt] = useState(true);

  const isValidEmail = (email: string) => {
    // Define the regex pattern for validating email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const vertifyOTP = () => {
    if (otp === '1234') {
      navigation.navigate('NewPassword');
    } else {
      setValidOpt(false);
      setOtp('');
    }
  };

  const handlePress = () => {
    if (isValidEmail(recoveryEmail)) {
      setIsValid(true);
      setEmailSent(true);
    } else {
      setShowError(true);
    }
  };

  return (
    <View style={styles.container}>
      {!emailsent ? (
        <View>
          <Text style={styles.title}>Enter Your Email To Send OTP</Text>
          <TextInput
            placeholder="Registered Email"
            style={styles.input}
            value={recoveryEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={e => {
              setRecoveryEmail(e);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text style={styles.buttonText}>Send OTP</Text>
            <Ionicons name="arrow-forward" size={25} color="white" />
          </TouchableOpacity>
          {showError && (
            <Text style={{color: 'red'}}>
              Please enter a valid email address
            </Text>
          )}
        </View>
      ) : (
        <View style={styles.otpContainer}>
          <Text style={styles.title}>OTP Sent!</Text>
          <Text style={styles.subtitle}>Please enter the OTP sent to</Text>
          <Text style={styles.recoveryEmail}>{recoveryEmail}</Text>
          <OTPInputView
            pinCount={4}
            code={otp}
            keyboardType="number-pad"
            autoFocusOnLoad
            codeInputFieldStyle={styles.underlineStyleBase}
            codeInputHighlightStyle={styles.underlineStyleHighLighted}
            onCodeFilled={code => {
              console.log(`Code is ${code}, you are good to go!`);
            }}
            editable={true}
            onCodeChanged={code => {
              setOtp(code);
            }}
          />
          <TouchableOpacity style={styles.button} onPress={vertifyOTP}>
            <Text style={styles.buttonText}>Verify</Text>
            <Ionicons name="arrow-forward" size={25} color="white" />
          </TouchableOpacity>
          {!validOpt && <Text style={{color: 'red'}}>OTP is invalid!</Text>}
        </View>
      )}
    </View>
  );
};

export default ForgotPassword;
