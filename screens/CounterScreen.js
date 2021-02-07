import React, {useReducer} from 'react'
import {View, Button, Text, StyleSheet } from 'react-native'

function init(initialNumber) {
  return {count: initialNumber };
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}

const CounterScreen = ({route}) =>{
  // Get the passed parameter
  const initialNumber = route.params.initialNumber
  
  const [counter, dispatch] = useReducer(reducer, initialNumber, init);

  return <View>
    <View style={styles.container}>
      <Text style={styles.text}>
        Current Counter: 
        {counter.count}
      </Text>
    </View>
    <View style={{flexDirection: 'row', justifyContent: 'space-around',}}>
      <Button
        title='Increase'
        onPress={()=>{
          dispatch({type: 'increment'});
        }}
      />
      <Button
        title='Decrease'
        onPress={()=>{
          dispatch({type: 'decrement'});
        }}
      />
      <Button
        title='Reset'
        onPress={()=>{
          dispatch({type: 'reset', payload: initialNumber});
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