import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import Slider from '@react-native-community/slider';

const ColorCounter = ({color, change, state}) =>{
  return <View>
    <Text>{color}</Text>
    <Slider
    minimumValue={0}
    maximumValue={255}
    onValueChange={value => change({color: color, value:value})}
  />
  <Text>{state}</Text>
  </View>
};

const styles = StyleSheet.create({});

export default ColorCounter;