import React from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {AddProduct} from '../components/AddProduct';
import {ProductCard} from '../components/ProductCard';

export const FavScreen = () => {
  const favorites = useSelector((state: any) => state.favs);

  return (
    <View
      style={{
        flex: 1,
        margin: 14,
      }}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          keyExtractor={item => item.id.toString()}
          renderItem={({item}: any) => <ProductCard product={item} />}
          horizontal={false}
          numColumns={2}
        />
      ) : (
        <AddProduct title="Add your first Product" />
      )}
    </View>
  );
};
