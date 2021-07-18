import React from 'react';
import {useSelector} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import {HomeScreen} from '../screens/HomeScreen';
import {CartScreen} from '../screens/CartScreen';
import {FavScreen} from '../screens/FavScreen';
import {StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: '#F1D4D4',
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray',
        labelPosition: 'below-icon',
        labelStyle: {
          fontSize: 14,
        },
        style: {
          borderTopWidth: 0,
          justifyContent: 'space-between',
          backgroundColor: '#CC0E74',
          elevation: 0,
          margin: 0,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color, focused, size}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Home':
              iconName = 'home-outline';
              break;
            case 'Cart':
              iconName = 'cart-outline';
              break;
            case 'Fav':
              iconName = 'heart-outline';
              break;
          }

          return (
            <Icon style={{color}} name={iconName} size={25} color="#2bc48a" />
          );
        },
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        options={{
          tabBarBadge: `${cart.length}`,
          tabBarIcon: ({color, size}) => (
            <View style={styles.specialTab}>
              <Icon
                style={{color}}
                name="cart-outline"
                size={25}
                color="#2bc48a"
              />
            </View>
          ),
        }}
        name="Cart"
        component={CartScreen}
      />
      <Tab.Screen name="Fav" component={FavScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  specialTab: {
    backgroundColor: '#F1D4D4',
    position: 'absolute',
    top: -24,
    padding: 10,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    borderWidth: 2,
    borderColor: '#CC0E74',
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
