import CompletedBar from "@/components/habit/CompletedBar";
import HabitListSection from "@/components/habit/HabitList";
import { ExemplaryHabits } from "@/components/habit/HabitSuggestion";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useMemo, useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { coffee, socialmedia, work } from "../../../../utils/index";

const HabitScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [approvedDayModalVisible, setApprovedDayModalVisible] = useState(false);
  const [newHabit, setNewHabit] = useState("");
  const [habitList, setHabitList] = useState([
    {
      title: "No caffeine",
      icon: coffee,
      todayList: [
        { today: "Monday", completed: null },
        { today: "Tuesday", completed: null },
        { today: "Wednesday", completed: null },
        { today: "Thursday", completed: null },
        { today: "Friday", completed: null },
        { today: "Saturday", completed: null },
        { today: "Sunday", completed: null },
      ],
      approved: false,
    },
    {
      title: "No social media",
      icon: socialmedia,
      todayList: [
        { today: "Monday", completed: null },
        { today: "Tuesday", completed: null },
        { today: "Wednesday", completed: null },
        { today: "Thursday", completed: null },
        { today: "Friday", completed: null },
        { today: "Saturday", completed: null },
        { today: "Sunday", completed: null },
      ],
      approved: false,
    },
    {
      title: "Work on my project",
      icon: work,
      todayList: [
        { today: "Monday", completed: null },
        { today: "Tuesday", completed: false },
        { today: "Wednesday", completed: null },
        { today: "Thursday", completed: null },
        { today: "Friday", completed: null },
        { today: "Saturday", completed: true },
        { today: "Sunday", completed: null },
      ],
      approved: false,
    },
  ]);
  const [pending, setPending] = useState<{
    habitIndex: number;
    dayIndex: number;
  } | null>(null);

  const todayLabel = useMemo(() => {
    const weekdays = [
      "Pazar",
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
    ];
    const today = new Date();
    return `${weekdays[today.getDay()]}, ${today.getDate()}`;
  }, []);

  {
    /* Bekleyen onay */
  }
  const applyApproval = (value: boolean) => {
    if (!pending) return;
    setHabitList((prev) =>
      prev.map((habit, habitIndex) =>
        habitIndex === pending.habitIndex
          ? {
              ...habit,
              todayList: habit.todayList.map((day, dayIndex) =>
                dayIndex === pending.dayIndex
                  ? { ...day, completed: value }
                  : day
              ),
            }
          : habit
      )
    );
    setPending(null);
    setApprovedDayModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 relative">
      <ScrollView className="relative" contentContainerStyle={{ paddingBottom: 80 }}>
        {/* Header Section (My Challenges, Wed, 18) */}
        <View className="flex flex-col gap-8 px-4">
          <View className="w-full flex-col gap-2">
            <View className="w-full flex-row items-center justify-between">
              <Text className="text-gray-800 font-bold text-3xl">Alışkanlıklarım</Text>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <FontAwesome name="plus" color="#2563EB" size={20} />
              </TouchableOpacity>
            </View>
            <View className="w-full">
              <Text className="text-gray-500">{todayLabel}</Text>
            </View>
          </View>

          <ExemplaryHabits />
          
          {/* Completed Bar Section */}
          <CompletedBar />

          {/* Habit List Section */}
          <HabitListSection
            habitList={habitList}
            requestApprove={(habitIndex: number, dayIndex: number) => {
              setPending({ habitIndex, dayIndex });
              setApprovedDayModalVisible(true);
            }}
          />
        </View>
      </ScrollView>

      {/* Eğer modalVisible ise içerik üzerine blur ekle; dış tıklama ile kapat */}
      {modalVisible && (
        <View className="w-full absolute inset-0 flex items-center justify-center px-20">
          {/* blur, içeriğin üzerinde görünür */}
          <BlurView
            intensity={15}
            tint="light"
            className="absolute inset-0"
            pointerEvents="auto"
          />
          <View
            pointerEvents="box-none"
            className="w-full flex items-center justify-center"
          >
            <View className="w-full h-44 bg-white rounded-lg p-4 flex flex-col  justify-center relative">
              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                className="absolute right-2 top-2"
              >
                <FontAwesome name="times" size={20} />
              </TouchableOpacity>
              <View className="flex flex-col gap-3">
                <TextInput
                  className="w-full border border-gray-200 rounded-md p-1"
                  placeholder="Alışkanlık adını giriniz"
                  value={newHabit}
                  onChangeText={setNewHabit}
                />
                <TouchableOpacity
                  className="bg-emerald-500 p-2 rounded-md"
                  onPress={() => {
                    setModalVisible(false);
                    setHabitList([
                      ...habitList,
                      {
                        title: newHabit,
                        icon: socialmedia,
                        todayList: [
                          { today: "Monday", completed: null },
                          { today: "Tuesday", completed: null },
                          { today: "Wednesday", completed: null },
                          { today: "Thursday", completed: null },
                          { today: "Friday", completed: null },
                          { today: "Saturday", completed: null },
                          { today: "Sunday", completed: null },
                        ],
                        approved: false,
                      },
                    ]);
                    setNewHabit("");
                  }}
                >
                  <Text className="text-center text-white">Oluştur</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      )}

      {/* Onay Bekleyen Günler Modal */}
      {approvedDayModalVisible && (
        <View className="w-full absolute inset-0 flex items-center justify-center px-20">
          <BlurView
            intensity={15}
            tint="light"
            className="absolute inset-0"
            pointerEvents="auto"
          />
          <View
            pointerEvents="box-none"
            className="w-full flex items-center justify-center"
          >
            <View className="w-full h-40 bg-white rounded-lg p-4 flex flex-col  justify-center relative">
              <View className="flex flex-col gap-5">
                <Text className="">
                  Alışkanlığınıza bugün devam ettiniz mi ?
                </Text>
                <View className="flex flex-col gap-1">
                  <TouchableOpacity
                    className="bg-emerald-500 p-2 rounded-md"
                    onPress={() => applyApproval(true)}
                  >
                    <Text className="text-center text-white">Evet</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => applyApproval(false)}
                    className="bg-gray-400 p-2 rounded-md"
                  >
                    <Text className="text-center text-white">Hayır</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default HabitScreen;
