import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputField: {
    width: "80%",
    borderBottomColor: "black",
    borderBottomWidth: 2,
    padding: 10,
    marginBottom: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  button: {
    width: "40%",
  },
});

export const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");

  const handleGoalChange = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const handleAddGoal = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='To do...'
          style={styles.inputField}
          onChangeText={handleGoalChange}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title='Cancel' color='red' onPress={props.onCancel} />
          </View>
          <View style={styles.button}>
            <Button title='Add' onPress={handleAddGoal} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;
