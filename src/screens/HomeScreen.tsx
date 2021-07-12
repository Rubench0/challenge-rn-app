import React, {useState} from 'react';
import {Image, Text, View, FlatList} from 'react-native';
import {ProductCard} from '../components/ProductCard';

export const HomeScreen = () => {
  const [numbers, setstate] = useState([
    {
      title: 'Jacket Baige',
      price: 653,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      id: 1,
    },
    {
      title: 'Jacket Baige',
      price: 653,
      image: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
      id: 2,
    },
  ]);

  return (
    <View>
      <FlatList
        data={numbers}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: any) => <ProductCard product={item} />}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};
