import React from 'react'
import {View, Text, Image,StyleSheet } from 'react-native'

const ImageDetail = ({title, source }) =>{
  return(
    <View>
      <Image source={source}/>
      <Text>{title}</Text>
    </View>
  )
};

const styles = StyleSheet.create({});

export default ImageDetail;