import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

import {AddTask} from '../screens/Main';
import HomeStack from './Stacks/HomeStack';
import TaskStack from './Stacks/TaskStack';
import StatisticsStack from './Stacks/StatisticsStack';
import ProfileStack from './Stacks/ProfileStack';

export default function MainStack() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Task" component={TaskStack} />
      <Tab.Screen name="Add" component={AddTask} />
      <Tab.Screen name="Statistics" component={StatisticsStack} />
      <Tab.Screen name="Profile" component={ProfileStack} />
    </Tab.Navigator>
  );
}
