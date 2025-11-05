import { coffee, socialmedia, work } from "@/utils";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const HabitListSection = () => {
  const habitTitle = [
    {
      title: "No caffeine",
      icon: coffee,
    },
    {
      title: "No social media",
      icon: socialmedia,
    },
    {
      title: "Work on my project",
      icon: work,
    },
  ];
  const todayList = [
    {
      today: "Monday",
    },
    {
      today: "Tuesday",
    },
    {
      today: "Wednesday",
    },
    {
      today: "Thursday",
    },
    {
      today: "Friday",
    },
    {
      today: "Saturday",
    },
    {
      today: "Sunday",
    },
  ];
  return (
    <View className="flex-col gap-10">
      {habitTitle.map((habit, index) => (
        <View key={index} className="flex-col gap-2">
          <View className="flex-row items-center gap-4">
            <View
              className="w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden"
              style={{
                boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                source={habit.icon}
                className="w-full h-full object-cover"
              />
            </View>
            <Text className="font-semibold text-xl">{habit.title}</Text>
          </View>
          <View className="w-full flex-row flex-wrap items-center justify-between">
            {todayList.map((day, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                className="w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center"
                onPress={() => {}}
              >
                <Text className="font-semibold">{day.today.charAt(0)}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default HabitListSection;
