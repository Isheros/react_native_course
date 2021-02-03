import React from 'react'
import {View, Button, StyleSheet } from 'react-native'

const HomeScreen = ({navigation}) =>{
  return <View>
    <Button
      title='Image Screen'
      onPress={()=> navigation.navigate('ImageScreen')}
    />
    <Button
      title='Counter Screen'
      onPress={()=> navigation.navigate('CounterScreen')}
    />
    <Button
      title='Color Screen'
      onPress={()=> navigation.navigate('ColorScreen')}
    />
    <Button
      title='Square Screen'
      onPress={()=> navigation.navigate('SquareScreen')}
    />
  </View>
};

const styles = StyleSheet.create({});

export default HomeScreen;