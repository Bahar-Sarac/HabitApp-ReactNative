import React from "react";
import { Text, View } from "react-native";

const CompletedBar = () => {
  return (
    <View className="w-full flex-col gap-2">
      {/* siyah alan */}
      <View className="w-full rounded-3xl bg-blue-600 justify-around items-center p-4 flex-row">
        <View className="flex-col gap-2">
          <Text style={{ color: "#ffffffff", fontSize: 16 }}>
            You are almost there!
          </Text>
          <Text className="text-emerald-300">1/3 day goals completed</Text>
        </View>

        <View className="w-24 h-24 flex-row justify-center items-center border-4 border-gray-200 rounded-full">
          <Text className="text-white text-xl font-semibold">35%</Text>
        </View>
      </View>
    </View>
  );
};

export default CompletedBar;
