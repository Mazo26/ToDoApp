import React, { useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleAddButton = (goalTitle) => {
    setGoalsList((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setOpenModal(false);
  };

  const handleDeleteArticle = (goalId) => {
    setGoalsList((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  return (
    <View style={styles.screen}>
      <Button title='Add new goal' onPress={() => setOpenModal(true)} />
      <GoalInput
        visible={openModal}
        onAddGoal={handleAddButton}
        onCancel={() => setOpenModal(false)}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={goalsList}
        renderItem={(goal) => (
          <GoalItem
            id={goal.item.id}
            onDelete={handleDeleteArticle}
            value={goal.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 30,
  },
});
