import React from 'react';
import AnimalList from './Screens/AnimalList';
import AnimalDetail from './Screens/AnimalDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          options={{headerShown: false}}
          component={SplashScreen}
        />
        <Stack.Screen
          name="AnimalList"
          options={{headerShown: false}}
          component={AnimalList}
        />
        <Stack.Screen
          name="AnimalDetail"
          component={AnimalDetail}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
