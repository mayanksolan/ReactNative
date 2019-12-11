import React, { useState } from "react";
import { Text, StyleSheet, View, Button, FlatList } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const val = 20;

  const setColor = (color, change) => {
    switch (color) {
      case "red":
        red + change > 255 || red + change < 0 ? null : setRed(red + change);
      case "green":
        green + change > 255 || green + change < 0
          ? null
          : setGreen(green + change);
      case "blue":
        blue + change > 255 || blue + change < 0
          ? null
          : setBlue(blue + change);
      default:
        return;
    }
  };

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor("red", val)}
        onDecrease={() => setColor("red", -1 * val)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor("blue", +val)}
        onDecrease={() => setColor("blue", -1 * val)}
        color="Blue"
      />
      <ColorCounter
        onIncrease={() => setColor("green", +val)}
        onDecrease={() => setColor("green", -1 * val)}
        color="Green"
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
