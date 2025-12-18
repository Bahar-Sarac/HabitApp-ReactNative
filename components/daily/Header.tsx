import React from "react";
import { Text, View } from "react-native";

export default function Header() {
  return (
    <View className="w-full flex-col p-6">
      <View className="w-full bg-blue-600 rounded-3xl justify-around items-center p-4">
        <Text className="text-2xl font-bold text-white text-center">
          Duygu & Not Takipçisi
        </Text>
        <Text className="text-base text-emerald-300 text-center mt-2">
          Detay eklemek için bir güne tıklayın.
        </Text>
      </View>
    </View>
  );
}
