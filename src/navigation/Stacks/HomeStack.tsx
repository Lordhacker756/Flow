import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AllTasks,
  EditTask,
  Home,
  Notifications,
  Pomodoro,
} from '../../screens/Main';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../constants/colors';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  const Header = ({navigation}) => {
    return (
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.headerText}>F L O W</Text>
        </View>
        <View style={styles.headerRight}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Notifications')}>
            <Feather name="bell" size={25} color={colors.theme_red} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle: {
          color: colors.theme_gray,
          fontSize: 20,
          fontWeight: 'bold',
        },
        headerTintColor: colors.theme_gray,
      }}
      initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: true,
          header: props => <Header {...props} />,
        }}
      />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Pomodoro" component={Pomodoro} />
      <Stack.Screen name="AllTasks" component={AllTasks} />
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
