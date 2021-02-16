import React, {useState} from 'react'
import {View, Text, StyleSheet, TextInput } from 'react-native'

const TextScreen = () =>{
  const [name, setName] = useState('');

  return (
  <View>
    <Text style={styles.text}>Tell me your name:</Text>
    <TextInput
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      value={name}
      onChangeText={(value)=> setName(value)}
    />
    <Text style={styles.text}>Hello {name}!</Text>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-around'
  },
  text: {
    padding: 12,
    borderRadius: 8,
  },
  input:{
      padding: 12,
      borderRadius: 8,
      color: "#666",
      backgroundColor: "#eaeaea"
  }
});


export default TextScreen;