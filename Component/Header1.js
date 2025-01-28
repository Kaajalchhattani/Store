import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import AddToCart from './AddToCart';
import { useNavigation } from '@react-navigation/native';
const Header1 = (cart) => {
    Pressable=()=>{
        {console.log("items2",cart)}
        navigation.navigate('AddToCart',  cart)
    }
    const navigation=useNavigation();
  return (
    <View style={styles.headerContainer}>
      
      <Text style={styles.headerTitle}>H&M</Text>
      <View style={styles.iconsContainer}>
        <TouchableOpacity  style={styles.iconButton}>
          
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconButton} onPress={()=>Pressable() }>
        <Text style={{color:'white'}} >Cart</Text>
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
});

export default Header1;