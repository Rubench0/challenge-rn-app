import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {ProductCard} from '../components/ProductCard';

const FavScreen = ({favorites}: any) => {
  console.log(favorites);

  return (
    <View>
      <FlatList
        data={favorites}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: any) => <ProductCard product={item} />}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  favorites: state.favs,
});

export default connect(mapStateToProps)(FavScreen);
