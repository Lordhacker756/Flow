import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditTask, Home, Notifications, Pomodoro} from '../../screens/Main';

const HomeStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="EditTask" component={EditTask} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Pomodoro" component={Pomodoro} />
    </Stack.Navigator>
  );
};

export default HomeStack;
