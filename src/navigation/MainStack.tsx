import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {Home} from '../screens/Main';

export default function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
    </Tab.Navigator>
  );
}
