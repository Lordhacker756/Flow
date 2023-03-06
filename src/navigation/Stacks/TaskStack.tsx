import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ViewTasks from '../../screens/Main/ViewTasks';
import Feather from 'react-native-vector-icons/Feather';

const TaskStack = ({navigation}) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen
        name="ViewTasks"
        component={ViewTasks}
        options={{
          title: 'View Tasks',
          headerLeft: (...props) => (
            <Feather.Button
              name="chevron-left"
              size={25}
              backgroundColor="black"
              color="white"
              onPress={() => navigation.navigate('Home')}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default TaskStack;
