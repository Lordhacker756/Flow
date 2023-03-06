import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AllTasks, Statistics} from '../../screens/Main';
import Feather from 'react-native-vector-icons/Feather';

const StatisticsStack = ({navigation}) => {
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
        name="Statistics"
        component={Statistics}
        options={{
          title: 'Statistics',
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
      <Stack.Screen name="AllTasks" component={AllTasks} />
    </Stack.Navigator>
  );
};

export default StatisticsStack;
