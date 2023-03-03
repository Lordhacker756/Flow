import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllTasks, Statistics} from '../../screens/Main';

const StatisticsStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="AllTasks" component={AllTasks} />
    </Stack.Navigator>
  );
};

export default StatisticsStack;
