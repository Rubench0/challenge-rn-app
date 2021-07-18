import React from 'react';
import {View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CartBox} from '../components/CartBox';
import {useSelector} from 'react-redux';
import {AddProduct} from '../components/AddProduct';

export const CartScreen = () => {
  const cart = useSelector((state: any) => state.cart);

  return (
    <View
      style={{
        flex: 1,
        margin: 14,
      }}>
      {cart.length > 0 ? (
        <FlatList
          data={cart}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}: any) => <CartBox product={item} />}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <AddProduct title="Add your first Product" />
      )}
    </View>
  );
};
