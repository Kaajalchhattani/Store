import { Image, StyleSheet, View, Dimensions } from 'react-native';
import React from 'react';

const { height } = Dimensions.get('screen');

const SliderCard = ({ media }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        style={styles.image}
        source={{ uri: `https:${media.url2}` }}
      />
    </View>
  );
};

export default SliderCard;

const styles = StyleSheet.create({
  imageContainer: {
    margin :0,
    alignItems: 'center',
  },
  image: {
    height: 200,
    width: 370, 
    resizeMode: 'cover',
  },
});
