import React, {useReducer} from 'react'
import {View, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'


const reducer = (state, action) =>{
  switch(action.color){
    case 'Red':
      return {...state, red: action.value};
    case 'Green':
      return {...state,green: action.value};
    case 'Blue':
      return {...state, blue: action.value};
    default:
      return state;
  }
}
const initialState = {red: 0, green: 0, blue:0};

const SquareScreen = () =>{
  const [state, dispatch] = useReducer(reducer, initialState)
  return <View>
      <ColorCounter
        change={dispatch}
        state={state.red}
        color={'Red'}
      />
      <ColorCounter
        change={dispatch}
        state={state.green}
        color={'Green'}
      />
      <ColorCounter
        change={dispatch}
        state={state.blue}
        color={'Blue'}
      />
      <View
        style={{
          height:150,
          width:150,
          backgroundColor:`rgb(${state.red},${state.green},${state.blue})`
        }}/>
  </View>
};

const styles = StyleSheet.create({});

export default SquareScreen;