import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ImageScreen from './screens/ImageScreen';
import HomeScreen from './screens/HomeScreen';
import CounterScreen from './screens/CounterScreen';
import ColorScreen from './screens/ColorScreen';
import SquareScreen from './screens/SquareScreen';

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ImageScreen" component={ImageScreen} />
        <Stack.Screen name="CounterScreen" component={CounterScreen}/>
        <Stack.Screen name="ColorScreen" component={ColorScreen} />
        <Stack.Screen name="SquareScreen" component={SquareScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

