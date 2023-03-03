import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditTask, Home, Notifications, Pomodoro} from '../../screens/Main';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  const Header = () => {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>F L O W</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity>
            <Feather name="bell" size={25} color={colors.theme_red} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: () => <Header />,
        }}
      />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Pomodoro" component={Pomodoro} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
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
  },
  headerText: {
    color: colors.theme_gray,
    fontSize: 25,
    fontWeight: 'bold',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default HomeStack;
