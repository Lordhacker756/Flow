import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {EditTask} from '../../screens/Main';

const TaskStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="EditTask" component={EditTask} />
    </Stack.Navigator>
  );
};

export default TaskStack;
