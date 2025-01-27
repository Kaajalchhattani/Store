import { Button, Image, ImageBackground, ScrollView, StyleSheet, 
    Text, TouchableOpacity, View } from 'react-native'
  import React from 'react'
  
  
  const AuthorCard = ({author}) => {
      
    return (
      
      <View 
      style={{ 
        width: 300, 
        height: 300, 
        borderRadius: 10, 
        overflow: 'hidden', 
        marginBottom: 20 
      }}
    >
    
         <ImageBackground
      source={{ uri: `https:${author.shareImages[0].fields.file.url}` }}
      style={{ height: '100%', width:'100%', justifyContent: 'center', alignItems: 'center' }}
      resizeMode="cover"
    >
      {console.log(author)}
      <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold',marginBlockStart:50, 
        backgroundColor: 'rgba(0,0,0,0.5)', padding: 10, borderRadius: 10}}>
        {author.pageTitle}
      </Text>
      <View style={{ flex: 1, justifyContent: 'flex-end',width:'100%' }}>
      <TouchableOpacity 
    style={{ 
      backgroundColor: 'lightgrey', 
      paddingVertical: 5, 
      
      
      width: '100%', 
      alignItems: 'center', 
      alignSelf: 'center', 
      marginBottom: 0 
    }} 
    onPress={() => navigateTo('AddToCard')}
  >
    <Text style={{ color: 'black', fontSize: 18, fontWeight: 'bold' }}>
      Add To Cart
    </Text>
  </TouchableOpacity>
  </View>
    </ImageBackground>
   
    </View>
    )
  }
  
  export default AuthorCard
  
  const styles = StyleSheet.create({})