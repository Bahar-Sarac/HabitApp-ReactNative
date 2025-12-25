import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HabitListSectionProps {
  habitList?: {
    habitName: string;
    habitImg: any;
    days: { date: string; day: string; completed: boolean | null }[];
  }[];
  requestApprove: (habitIndex: number, dayIndex: number) => void;
}

const HabitListSection: React.FC<HabitListSectionProps> = ({
  habitList,
  requestApprove,
}) => {
  console.log("Rendering HabitListSection with habits:", habitList);
  return (
    <View className="flex-col gap-10">
      {habitList?.map((habit, index) => (
        <View key={index} className="flex-col gap-2">
          <View className="flex-row items-center gap-4">
            <View
              className="w-16 h-16 rounded-2xl flex items-center justify-center border border-gray-100 overflow-hidden"
              style={{
                boxShadow: "2px 2px 5px 2px rgba(0, 0, 0, 0.1)",
              }}
            >
              <Image
                source={habit.habitImg}
                className="w-full h-full object-cover"
              />
            </View>
            <Text className="font-semibold text-xl">{habit.habitName}</Text>
          </View>
          <View className="w-full flex-row flex-wrap items-center justify-between">
            {habit.days.map((day, dayIndex) => (
              <TouchableOpacity
                key={dayIndex}
                className={`w-12 h-12 rounded-full border border-gray-400 flex items-center justify-center ${
                  day.completed ? "bg-emerald-500" : "bg-white"
                }`}
                onPress={() => {
                  if (day.completed === null) {
                    requestApprove(index, dayIndex);
                  }
                }}
              >
                {day.completed === null ? (
                  <Text className="font-semibold">{day.day.charAt(0)}</Text>
                ) : day.completed ? (
                  <Text className="font-semibold text-gray-400">
                    <FontAwesome name="check" size={18} color={"white"} />
                  </Text>
                ) : (
                  <Text className="font-semibold">
                    <FontAwesome name="times" size={18} color="#c2c6cfff" />
                  </Text>
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
};

export default HabitListSection;
