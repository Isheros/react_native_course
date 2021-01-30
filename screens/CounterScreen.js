import React, {useState} from 'react'
import {View, Button, Text, StyleSheet } from 'react-native'

const CounterScreen = () =>{
  const [counter, setCounter] = useState(0);

  return <View>
    <View style={styles.container}>
      <Text style={styles.text}>
        Current Counter: 
        {counter}
      </Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
      <Button
        title='Increase'
        onPress={()=>{
          setCounter(counter + 1);
        }}
      />
      <Button
        title='Decrease'
        onPress={()=>{
          setCounter(counter - 1);
        }}
      />
    </View>
  </View>
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: 'space-around'
  },
  text: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#eaeaea"
  },
});


export default CounterScreen;