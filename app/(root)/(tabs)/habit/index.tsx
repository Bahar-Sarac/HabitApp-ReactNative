import CompletedBar from "@/components/habit/CompletedBar";
import HabitListSection from "@/components/habit/HabitListSection";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const HabitScreen = () => {
  return (
    <ScrollView className="px-4 pt-10">

      {/* Header Section (My Challenges, Wed, 18) */}
      <View className="flex flex-col gap-8">
        <View className="w-full flex-col gap-2">
          <View className="w-full flex-row items-center justify-between">
            <Text className="font-bold text-3xl">My Challenges</Text>
            <FontAwesome name="plus" size={20} />
          </View>
          <View className="w-full">
            <Text className="text-gray-500">Wed, 18</Text>
          </View>
        </View>

        {/* Completed Bar Section */}
        <CompletedBar />

        {/* Habit List Section */}
        <HabitListSection />
      </View>
      
    </ScrollView>
  );
};

export default HabitScreen;
