import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddToCart from './AddToCart';
import { useNavigation } from '@react-navigation/native';


const Header1 = ({cart,length}) => {
const [text,setText]=useState(length)

useEffect(()=>{
setText(length)
},[length])

    Pressable=()=>{
        {console.log("items2",cart,length)}
        navigation.navigate('AddToCart',  cart)
    }
    console.log("cart",cart,length)
   
    const navigation=useNavigation();
  
   

   
  return (
    <View style={styles.headerContainer}>
      
      <Text style={styles.headerTitle}>H&M</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity  style={styles.iconButton}>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>Pressable() }>
        <View style={{ }}>
            <Text style={styles.button}>
              {console.log("text",text)}
              {0}</Text>
            <Text style={{ color: 'white' }}>Cart</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: 40,
    backgroundColor: '#333', 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
  },
  iconsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconButton: {
    marginLeft: 20,
  },
  button: {
   
    backgroundColor: 'red',
    color: 'black',
    fontWeight: 'bold',
    paddingHorizontal: 5,
    borderRadius: 5,
    overflow: 'hidden',
  },
});

export default Header1;