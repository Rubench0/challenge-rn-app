import React from 'react';
import {View, Text} from 'react-native';

interface Props {
  title: string;
}

export const AddProduct = ({title}: Props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
      <Text
        style={{
          fontSize: 22,
          color: 'white',
          letterSpacing: 3,
        }}>
        {title}
      </Text>
    </View>
  );
};
