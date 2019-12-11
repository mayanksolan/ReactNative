import React, { useState, useReducer } from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + action.payload };
    case "DECREMENT":
      return { ...state, counter: state.counter - action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  const { counter } = state;
  //const [counter, setCounter] = useState(0);
  return (
    <View>
      <Button
        title="Increment"
        onPress={() => {
          dispatch({ type: "INCREMENT", payload: 1 });
        }}
      />
      <Button
        title="Decrement"
        onPress={() => {
          dispatch({ type: "DECREMENT", payload: 1 });
        }}
      />
      <Text>Current Count: {counter}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
