import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const yourName = "Mayank";
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      <Text style={styles.nameTextStyle}>My name is {yourName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45
  },
  nameTextStyle: {
    fontSize: 20
  }
});

export default ComponentsScreen;
