import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { Movie } from '../interfaces/movieInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: Movie;
}

const Stack = createStackNavigator<RootStackParams>();

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          // backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen"  options={{ cardStyle: { backgroundColor: 'white' }}} component={ HomeScreen } />
      <Stack.Screen name="DetailScreen" component={ DetailScreen } />
    </Stack.Navigator>
  );
}

export default StackNavigation;