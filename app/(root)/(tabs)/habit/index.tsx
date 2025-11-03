import AlmostThere from "@/components/AlmostThere";
import React from "react";
import { View } from "react-native";

const HabitScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
      }}
    >
      <AlmostThere />
    </View>
  );
};

export default HabitScreen;
