import React, {useState, useEffect} from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
  Button,
  ActivityIndicator,
} from 'react-native';
import {ProductCard} from '../components/ProductCard';
import {connect} from 'react-redux';
import storeDB from '../api/storeDB';

const HomeScreen = ({products}: any) => {
  const [items, setItems] = useState([]);

  const chargeProducts = async () => {
    const data = storeDB.get('/products');
    const resp = await data;
    setItems(resp.data);
    console.log(items);
  };

  useEffect(() => {
    chargeProducts();
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

const mapStateToProps = (state: any) => ({
  products: state.products,
});

export default connect(mapStateToProps)(HomeScreen);
