import React from 'react';
import {useState} from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';

export const Contador = () => {
  const [counter, setCounter] = useState(1);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      <TouchableOpacity
        onPress={() => {
          if (counter > 1) {
            setCounter(counter - 1);
          }
        }}
        style={styles.button}>
        <Text style={styles.counter}>-</Text>
      </TouchableOpacity>
      <Text style={{marginHorizontal: 6}}>{counter}</Text>
      <TouchableOpacity
        onPress={() => setCounter(counter + 1)}
        style={styles.button}>
        <Text style={styles.counter}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'pink',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counter: {
    fontWeight: 'bold',
    color: 'white',
  },
});
