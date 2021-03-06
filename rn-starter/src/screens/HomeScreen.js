import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  //console.log(props.navigation);
  return (
    <View>
      <Text style={styles.text}>Hi There</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
        title="Go To Components Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("List")}
        title="Go To List Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
        title="Go To Image Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
        title="Go To Counter Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Color")}
        title="Go To Color Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Square")}
        title="Go To Square Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Text")}
        title="Go To Text Demo"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Box")}
        title="Go To Box Demo"
      />
      {/* <TouchableOpacity onPress={() => navigate("List")}>
        <Text>Go To List Demo!! </Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  button: {
    margin: 20
  }
});

export default HomeScreen;
