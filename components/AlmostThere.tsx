import React from "react";
import { Text, View } from "react-native";

const AlmostThere = () => {
  return (
    <View className="w-full">
      <View
        style={{
          width: "100%",
          height: 150,
          borderRadius: 30,
          backgroundColor: "#000000ff",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Text style={{ color: "#ffffffff", fontSize: 16 }}>
            You are almost there!
          </Text>
          <Text style={{ color: "#c1c1c1ff" }}>1/3 day goals completed</Text>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              width: 80,
              height: 80,
              borderRadius: 40,
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "#ffffffff",
            }}
            className="w-20 h-20 flex-row"
          >
            <Text className="text-white text-lg">35%</Text>
          </View>
        </View>
      </View>
      <View className="w-10 h-10 rounded-full border border-gray-200">
        <Text>a</Text>
      </View>
    </View>
  );
};

export default AlmostThere;
