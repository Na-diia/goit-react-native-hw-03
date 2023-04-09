import  React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, } from 'react-native';

import Navigation from './src/Screens/Navigation';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Navigation />
    </TouchableWithoutFeedback>
    </NavigationContainer>
  );
};