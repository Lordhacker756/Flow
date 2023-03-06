import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AddTask} from '../screens/Main';
import HomeStack from './Stacks/HomeStack';
import TaskStack from './Stacks/TaskStack';
import StatisticsStack from './Stacks/StatisticsStack';
import ProfileStack from './Stacks/ProfileStack';
import colors from '../constants/colors';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {BlurView} from '@react-native-community/blur';

const Tab = createBottomTabNavigator();

const Header = ({navigation}) => {
  return (
    <View style={styles.header}>
      <View style={styles.headerLeft}>
        <TouchableOpacity onPress={() => navigation.navigate('Notifications')}>
          <Ionicons
            name="arrow-back-outline"
            size={30}
            color={colors.theme_red}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Create New Task</Text>
      </View>
    </View>
  );
};

export default function MainStack() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.theme_red,
        tabBarInactiveTintColor: colors.theme_gray,
        tabBarStyle: {
          position: 'absolute',
          bottom: 10,
          left: 20,
          right: 20,
          elevation: 10,
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          borderColor: colors.theme_red,
          borderTopColor: 'transparent',
          borderRadius: 15,
          height: 70,
          paddingBottom: 15,
        },
      }}>
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Feather
                name="home"
                size={25}
                color={focused ? colors.theme_red : colors.theme_gray}
              />
              <Text
                style={{
                  color: focused ? colors.theme_red : colors.theme_gray,
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="TaskStack"
        component={TaskStack}
        options={{
          tabBarLabel: 'Tasks',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Feather
                name="calendar"
                size={25}
                color={focused ? colors.theme_red : colors.theme_gray}
              />
              <Text
                style={{
                  color: focused ? colors.theme_red : colors.theme_gray,
                }}>
                Tasks
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddTask}
        options={{
          headerShown: true,
          header(props) {
            return <Header {...props} />;
          },
          tabBarIcon: ({focused}) => (
            <View
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
                backgroundColor: focused ? colors.theme_gray : colors.theme_red,
                justifyContent: 'center',
                alignItems: 'center',
                top: -20,
                shadowColor: colors.theme_red,
                shadowOffset: {
                  width: 0,
                  height: 10,
                },
                shadowOpacity: 0.25,
                shadowRadius: 3.5,
                elevation: 5,
              }}>
              <Feather
                name="plus"
                size={25}
                color={focused ? colors.theme_red : colors.theme_gray}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="StatisticsStack"
        component={StatisticsStack}
        options={{
          tabBarLabel: 'Statistics',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Entypo
                name="line-graph"
                size={25}
                color={focused ? colors.theme_red : colors.theme_gray}
              />
              <Text
                style={{
                  color: focused ? colors.theme_red : colors.theme_gray,
                }}>
                Statistics
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused}) => (
            <View style={styles.iconContainer}>
              <Ionicons
                name="person-outline"
                size={25}
                color={focused ? colors.theme_red : colors.theme_gray}
              />
              <Text
                style={{
                  color: focused ? colors.theme_red : colors.theme_gray,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: 'black',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10,
  },
  headerText: {
    color: colors.theme_gray,
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
