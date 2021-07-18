import React, {useState, useEffect} from 'react';
import storeDB from '../api/storeDB';

import {Image, View, FlatList, ActivityIndicator} from 'react-native';
import {ProductCard} from '../components/ProductCard';

export const HomeScreen = ({favorites}: any) => {
  const [items, setItems] = useState([]);

  const loadProducts = async () => {
    const data = storeDB.get('/products');
    const resp = await data;
    setItems(resp.data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <View style={{marginBottom: 10, flex: 1}}>
      <Image
        source={{
          uri: 'https://i.ibb.co/k4xNVwg/The-Fake-Store.png',
        }}
        style={{
          height: 60,
          width: 380,
        }}
      />

      {items.length > 0 ? (
        <FlatList
          data={items}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}: any) => <ProductCard product={item} />}
          horizontal={false}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#790C5A" />
        </View>
      )}
    </View>
  );
};
