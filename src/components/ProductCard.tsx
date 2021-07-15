import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {ProductsDBResponse} from '../interfaces/ProductsInterface';
import {changeTitle} from '../helpers/changeTitle';

interface Props {
  product: ProductsDBResponse;
}

export const ProductCard = ({product}: Props) => {
  const navigator = useNavigation();

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
