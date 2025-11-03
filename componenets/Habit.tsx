import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Habit = () => {
  return (
    <View style={styles.habitcontainer}>
      <Text style={styles.hosgeldinizText}>Hoş Geldin X</Text>
      <View>
        <Text>Alışkanlık eklemek</Text>
      </View>
      <View>
        <Text>Alışkanlıklar</Text>
      </View>
      <View>
        <Text>Hazır ışkanlıklar</Text>
      </View>
      <View>
        <Text>Navigation bar</Text>
      </View>
    </View>
  );
};

export default Habit;

const styles = StyleSheet.create({
  habitcontainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "#9130F2",
    gap: 50,
    padding: 10,
  },
  hosgeldinizText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#82F27E",
  },
});
