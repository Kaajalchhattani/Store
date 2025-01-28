/*import React, { useEffect, useState } from 'react';
import { Text, Image, View, StyleSheet } from 'react-native';

const AddToCart = ({ route }) => {
    const[item,setitem]=useState({})
    
    useEffect(() => {
        
        setitem((prevItems) => {
         
          const updatedItems = { ...prevItems };
          if (updatedItems[name]) {
            
            updatedItems[name].quantity += 1;
          } else {
           
            updatedItems[name] = { image, quantity: 1 };
          }
          return updatedItems;
        });
      }, [name, image]);
  const {  image,name} = route.params; 
  
  console.log(name,image)
  /*const selectedAuthor = authors.find(author => author.pageTitle === name);*/
/*
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Added to Cart</Text>

      
      {Object.entries(item).map(([itemName, itemDetails], index) => (
        <View key={index} style={styles.item}>
          <Image source={{ uri: itemDetails.image }} style={styles.productImage} />
          <Text style={styles.productName}>{itemName}</Text>
          <Text style={styles.productQuantity}>Quantity: {itemDetails.quantity}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    marginBottom: 20,
    alignItems: 'center',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  productName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  productQuantity: {
    fontSize: 16,
    color: 'gray',
  },
});

export default AddToCart;*/
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AddToCart = ( cart ) => {
  const pressButton=()=>{

  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Added to Cart</Text>
        {console.log("cart.item",cart.route.params.item)}
        
        {(cart.route.params.item.length>0)?
        (cart.route.params.item.map((item, index) => (
          <View key={index} style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.productImage} />
          <View style={styles.button}>
            <Text style={styles.productName}>{item.name}</Text>
            <TouchableOpacity style={styles.opacity} onPress={()=>pressButton()}><Text>Remove from Cart</Text></TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <Text>No items in cart</Text>
      )}

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
 
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    margin: 10,
    padding:0,
    alignItems: 'center',
    
    
    flex:1,
    flexDirection:'row',

      
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: 0,
  },
  productName: {
    marginLeft:80,
    fontSize: 18,
    fontWeight: 'bold',
  },
  button:{
   
  },
  opacity:{
    backgroundColor:'lightgrey',
    marginTop:10,
    marginLeft:50,
    padding:10,
    fontWeight:'600',


  }
})

export default AddToCart