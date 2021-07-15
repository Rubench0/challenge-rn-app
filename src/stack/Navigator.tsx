import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import {DetailScreen} from '../screens/DetailScreen';
import {StyleSheet} from 'react-native';
import {Tabs} from './Tabs';
import {ProductsDBResponse} from '../interfaces/ProductsInterface';

export type RootStackParams = {
  HomeScreen: undefined;
  DetailScreen: ProductsDBResponse;
};

const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#F1D4D4',
        },
      }}>
      <Stack.Screen name="Tabs" component={Tabs} />
      <Stack.Screen name="DetailScreen" component={DetailScreen} />
    </Stack.Navigator>
  );
};
