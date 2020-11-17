import * as React from 'react';
import 'react-native-gesture-handler';
import { Text, View, StyleSheet, Image, Button, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Constants from 'expo-constants';
import HomeScreen from './HomeScreen';
import ListViewScr from './ListViewScr';

export default function App() {
  return ( 
	<NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="List View" component={ListViewScr} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const Stack = createStackNavigator();