import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {RootStackParams} from '../stack/Navigator';
import {StackScreenProps} from '@react-navigation/stack';
import {ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';

const screemHeight = Dimensions.get('screen').height;

interface Props extends StackScreenProps<RootStackParams, 'DetailScreen'> {}

export const DetailScreen = ({route, navigation}: Props) => {
  const item = route.params;

  return (
    <ScrollView>
      <View style={{...styles.imageContainer, marginBottom: 20}}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.title}>{item.title}</Text>
      </View>

      <View style={{...styles.marginContainer, ...styles.section}}>
        <Text style={styles.price}>${item.price}</Text>
        <Text style={styles.price}>{item.category}</Text>
      </View>

      <View style={styles.marginContainer}>
        <Text style={styles.description}>{item.description}</Text>
      </View>

      {/*Boton para cerrar*/}
      <TouchableOpacity style={styles.goBack} onPress={() => navigation.pop()}>
        <Icon color="black" name="arrow-back-outline" size={40} />
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    height: screemHeight * 0.4,
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.29,
    shadowRadius: 7,
    elevation: 9,
    backgroundColor: 'white',
    borderBottomEndRadius: 25,
    borderBottomLeftRadius: 25,
    overflow: 'hidden',
    padding: 20,
  },
  description: {
    fontSize: 14,
    color: 'black',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  image: {
    flex: 1,
    resizeMode: 'contain',
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#790C5A',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    opacity: 0.5,
    backgroundColor: '#E6739F',
    padding: 8,
    borderRadius: 20,
  },

  subtitle: {
    opacity: 0.8,
    fontSize: 14,
  },
  goBack: {
    position: 'absolute',
    top: 10,
    elevation: 999,
    left: 10,
    zIndex: 999,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.24,
  },
});
