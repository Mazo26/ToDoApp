import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "gray",
  },
});

export const GoalItem = (props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={props.onDelete.bind(this, props.id)}
    >
      <View style={styles.listItem}>
        <Text>{props.value}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default GoalItem;
