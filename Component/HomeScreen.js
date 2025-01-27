import React, {useEffect, useState} from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';


import useContentful from './useContentful';
import SliderCard from './SliderCard';
import useContentful2 from './useContentful2';
import Header1 from './Header1';
import AuthorCard from './AuthorCard';

const HomeScreen = () => {
  const [authors, setAuthors] = useState([]);
  const [images, setImage] = useState([]);
  const {getAuthors} = useContentful();
  const {getImage} = useContentful2();
  useEffect(() => {
    getAuthors().then(response => setAuthors(response));
    getImage().then(response => setImage(response));
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header1></Header1>
      <ScrollView
        horizontal
        style={{ flex: 1, margin: 0 }}
        showsHorizontalScrollIndicator={false}
      >
        {images.map((media, index) => (
          <SliderCard key={index} media={media} />
        ))}
      </ScrollView>


      <ScrollView
        style={{flex: 1, marginLeft: 15, marginRight: 15, padding: 0}}>
        <ScrollView
          style={{flex: 1, width: '100%'}}
          contentContainerStyle={{
            alignItems: 'center',
            paddingVertical: 20,
            height: '100%',
          }}>
          {authors.map((author, index) => (
            <AuthorCard key={index} author={author} />
          ))}
        </ScrollView>
      </ScrollView>

      
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
