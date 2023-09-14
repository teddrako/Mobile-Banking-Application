import Welcome from './src/screens/Welcome';
import Tabs from './src/components/Tabs';
import SignUp from './src/screens/SignUp';

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SignUp" >
          {(props) => <SignUp {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Tabs" >
          {(props) => <Tabs {...props} />}
        </Stack.Screen>

      </Stack.Navigator>
  </NavigationContainer>
  );
}
