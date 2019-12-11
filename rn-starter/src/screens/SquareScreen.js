import React, { useState, useReducer } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const val = 20;
const reducer = (state, action) => {
  //action === {type:"red"||"green"||"blue", payload 15 || -15}
  switch (action.type) {
    case "red":
      return state.red + action.payload > 255 || state.red + action.payload < 0
        ? state
        : { ...state, red: state.red + action.payload };
    case "green":
      return state.green + action.payload > 255 ||
        state.green + action.payload < 0
        ? state
        : { ...state, green: state.green + action.payload };
    case "blue":
      return state.blue + action.payload > 255 ||
        state.blue + action.payload < 0
        ? state
        : { ...state, blue: state.blue + action.payload };
    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;
  return (
    <View>
      <ColorCounter
        onIncrease={() => dispatch({ type: "red", payload: val })}
        onDecrease={() => dispatch({ type: "red", payload: -val })}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "green", payload: val })}
        onDecrease={() => dispatch({ type: "green", payload: -val })}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => dispatch({ type: "blue", payload: val })}
        onDecrease={() => dispatch({ type: "blue", payload: -val })}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      ></View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
