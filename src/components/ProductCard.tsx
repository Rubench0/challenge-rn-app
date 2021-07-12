import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductsDBResponse} from '../interfaces/ProductsInterface';

interface Props {
  product: ProductsDBResponse;
}

export const ProductCard = ({product}: Props) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: 'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
          }}
          style={{
            flex: 1,
            resizeMode: 'contain',
          }}
        />
      </View>
      <View style={styles.informationContainer}>
        <View>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.subtitle}>{product.price}</Text>
        </View>
        <Icon name="star-outline" size={20} color="black" />
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
    color: '#5856D6',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '300',
    color: 'black',
    opacity: 0.5,
  },
});
