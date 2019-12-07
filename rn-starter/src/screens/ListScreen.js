import React from "react";
import { view, Text, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend #1", age: 12 },
    { name: "Friend #2", age: 24 },
    { name: "Friend #3", age: 36 },
    { name: "Friend #4", age: 48 },
    { name: "Friend #5", age: 60 },
    { name: "Friend #6", age: 72 },
    { name: "Friend #7", age: 84 },
    { name: "Friend #8", age: 96 },
    { name: "Friend #9", age: 108 }
  ];
  return (
    <FlatList
      // horizontal
      // showsHorizontalScrollIndicator={false}
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.itemStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    marginVertical: 50
  }
});

export default ListScreen;
