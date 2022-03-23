import React from 'react';
import AnimalList from './AnimalList';
import AnimalDetail from './AnimalDetail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="AnimalList">
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
