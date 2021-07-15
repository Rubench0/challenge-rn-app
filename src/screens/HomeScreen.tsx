import React, {useState, useEffect} from 'react';
import {Image, Text, View, FlatList, Button} from 'react-native';
import {ProductCard} from '../components/ProductCard';
import {connect} from 'react-redux';
import {ProductsDBResponse} from '../interfaces/ProductsInterface';
import storeDB from '../api/storeDB';

const HomeScreen = ({navigation}: any) => {
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
        data={items}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}: any) => <ProductCard product={item} />}
        horizontal={false}
        numColumns={2}
      />
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  products: state.products,
});

export default connect(mapStateToProps)(HomeScreen);
