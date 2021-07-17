import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductsDBResponse} from '../interfaces/ProductsInterface';
import {changeTitle} from '../helpers/changeTitle';
import {useRoute} from '@react-navigation/native';
import {connect, DefaultRootState, useDispatch, useSelector} from 'react-redux';

interface Props {
  product: ProductsDBResponse;
  addTocart: () => void;
}

export const ProductCard = ({product}: any) => {
  const favorites = useSelector((state: any) => state.favs);
  const navigator = useNavigation();
  const dispatch = useDispatch();
  const route = useRoute();

  //Saber si el Product esta en Favoritos
  let exist: any;
  if (favorites) {
    exist = favorites.find((item: any) => item.title === product.title);
  }

  return (
    <View style={styles.cardContainer}>
      <TouchableOpacity
        onPress={() => navigator.navigate('DetailScreen', product)}
        style={styles.imageContainer}>
        <Image
          source={{
            uri: `${product.image}`,
          }}
          style={{
            flex: 1,
            resizeMode: 'contain',
          }}
        />
      </TouchableOpacity>
      <View style={styles.informationContainer}>
        <View>
          <Text style={styles.title}>{changeTitle(product.title)}</Text>
          <Text style={styles.subtitle}>$ {product.price}</Text>
        </View>
        {route.name === 'Fav' ? (
          <TouchableOpacity
            onPress={() =>
              dispatch({
                type: 'REMOVE_FROM_FAV',
                payload: product,
              })
            }
            style={{
              backgroundColor: '#eccdcd',
              padding: 3,
              borderRadius: 14,
              alignItems: 'center',
            }}>
            <Icon name="trash-outline" size={20} color="black" />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              if (exist != undefined) {
                dispatch({
                  type: 'ALREADY_THERE',
                });
              } else {
                dispatch({
                  type: 'ADD_TO_FAV',
                  payload: product,
                });
              }
            }}
            style={{
              backgroundColor: '#eccdcd',
              padding: 3,
              borderRadius: 14,
              alignItems: 'center',
            }}>
            {exist != undefined ? (
              <Icon name="heart" size={20} color="red" />
            ) : (
              <Icon name="heart-outline" size={20} color="red" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'white',
    width: 160,
    height: 240,
    padding: 10,
    borderRadius: 12,
    shadowColor: '#000',
    margin: 14,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  imageContainer: {
    flex: 5,
  },
  informationContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#790C5A',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
    opacity: 0.5,
  },
});
