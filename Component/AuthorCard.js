import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Header1 from './Header1'

const AuthorCard = ({ author ,cart , updateCart}) => {
    
    const [new1, setnew1] = useState([]);
    const [toggle,setToggle]=useState(true)
    const[text,setText]=useState('Add To Cart')

  
      const addToCart = (image, name, toggle) => {
        const newItem = { image, name, toggle };
        if (toggle === true) {
         
          updateCart(newItem, true);   
          setText('Remove from Cart');
          setToggle(false);
        } else {
          
          updateCart(newItem, false); 
          setToggle(true);
          setText('Add To Cart');
        }
      };
    
  
   
    useEffect(() => {
      console.log("Updated items:", cart);
    }, [cart]);
 
 

  return (
    <View
      style={{
        width: 300,
        height: 300,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 20,
      }}
    >
        <View style={{display:'none'}}>
            {console.log("items",cart)}
     <Header1 item={cart}></Header1>
        </View>
      <ImageBackground
        source={{ uri: `https:${author.shareImages[0].fields.file.url}` }}
        style={{
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        resizeMode="cover"
      >
        <Text
          style={{
            color: 'white',
            fontSize: 20,
            fontWeight: 'bold',
            marginBlockStart: 50,
            backgroundColor: 'rgba(0,0,0,0.5)',
            padding: 10,
            borderRadius: 10,
          }}
        >
          {author.pageTitle}
        </Text>

        <View style={{ flex: 1, justifyContent: 'flex-end', width: '100%' }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'lightgrey',
              paddingVertical: 5,
              width: '100%',
              alignItems: 'center',
              alignSelf: 'center',
              marginBottom: 0,
            }}
            onPress={() =>
              addToCart(`https:${author.shareImages[0].fields.file.url}`, author.pageTitle,toggle)
            }
          >
            <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
             
                {text}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}


export default AuthorCard

const styles = StyleSheet.create({})
