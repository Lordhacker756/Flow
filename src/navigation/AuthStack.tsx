import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {
  Login,
  Register,
  ProfileSetup,
  ForgotPassword,
  NewPassword,
} from '../screens/Auth';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ProfileSetup" component={ProfileSetup} />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: true,
          headerTitle: 'Forgot Password',
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
      <Stack.Screen
        name="NewPassword"
        component={NewPassword}
        options={{
          headerShown: true,
          headerTitle: 'New Password',
          headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
          },
          headerTintColor: 'white',
          headerStyle: {
            backgroundColor: 'black',
          },
        }}
      />
    </Stack.Navigator>
  );
}
