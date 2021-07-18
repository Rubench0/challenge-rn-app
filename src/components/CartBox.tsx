import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {Contador} from './Contador';
import Icon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';

export const CartBox = ({product}: any) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.CardContainer}>
      <Image
        source={{
          uri: `${product.image}`,
        }}
        style={{
          height: 80,
          width: 80,
          borderRadius: 24,
        }}
      />

      <Contador />
      <TouchableOpacity
        onPress={() => {
          dispatch({
            type: 'REMOVE_FROM_CART',
            payload: product,
          });
        }}>
        <Icon name="trash-outline" size={36} color="black" />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  CardContainer: {
    borderBottomWidth: 2,
    borderColor: '#DDD',
    paddingBottom: 12,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
