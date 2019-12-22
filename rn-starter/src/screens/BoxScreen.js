import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle}>Child #1</Text>
      <Text style={styles.textTwoStyle}>Child #22</Text>
      <Text style={styles.textThreeStyle}>Child #333</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 200
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "darkred",
    backgroundColor: "red",
    height: 100,
    width: 125
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "darkgreen",
    backgroundColor: "green",
    height: 100,
    width: 125,
    alignSelf: "center"
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "darkblue",
    backgroundColor: "purple",
    height: 100,
    width: 125,
    position: "absolute",
    alignSelf: "flex-end"
  }
});

export default BoxScreen;
