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
    borderWidth: 3,
    borderColor: "black",
    height: 200,
    flexDirection: "row"
  },
  textOneStyle: {
    borderWidth: 3,
    borderColor: "orange",
    flex: 4
  },
  textTwoStyle: {
    borderWidth: 3,
    borderColor: "orange",
    flex: 4
  },
  textThreeStyle: {
    borderWidth: 3,
    borderColor: "orange",
    flex: 2
  }
});

export default BoxScreen;
