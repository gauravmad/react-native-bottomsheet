import { View, Text } from 'react-native'
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeMain } from '../screens/home-screen';

const Stack = createStackNavigator();

export const Navigator:React.FC=()=> {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown:false}} component={HomeMain} />
    </Stack.Navigator>
  )
}