import React from "react";
import { Text, View } from "react-native";

const HabitScreen = () => {
  return (
    <View className="flex-1 justify-center items-center p-4 gap-2">
      <View className="w-full flex-col gap-2">
        {/* siyah alan */}
        <View className="w-40 h-80 rounded-md bg-black justify-around items-center">
          <View className="flex-col gap-2">
            <Text style={{ color: "#ffffffff", fontSize: 16 }}>
              You are almost there!
            </Text>
            <Text className="text-white">1/3 day goals completed</Text>
          </View>
          <View className="justify-center items-center">
            <View className="w-20 h-20 flex-row rounded-md justify-center items-center "
              /*style={{
                width: 80,
                height: 80,
                borderRadius: 40,
                justifyContent: "center",
                alignItems: "center",
                borderWidth: 2,
                borderColor: "#ffffffff",
              }} */
            >
              <Text className="text-white text-lg">35%</Text>
            </View>
          </View>
        </View>

        {/* kırmızı alan */}
        <View className="w-full bg-red-500 flex-row items-center justify-around">
          <View className="w-20 h-20 rounded-full border border-gray-200"></View>
          <Text className="text-black text-lg">Bahar Sarac</Text>
        </View>
      </View>
    </View>
  );
};

export default HabitScreen;
