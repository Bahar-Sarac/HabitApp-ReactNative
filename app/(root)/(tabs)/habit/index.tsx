import CompletedBar from "@/components/habit/CompletedBar";
import HabitListSection from "@/components/habit/HabitList";
import { ExemplaryHabits } from "@/components/habit/HabitSuggestion";
import { useCreateHabit } from "@/hooks/habit/useCreateHabit";
import { useCreateHabitDay } from "@/hooks/habit/useCreateHabitDay";
import { useGetHabits } from "@/hooks/habit/useGetHabits";
import { FontAwesome } from "@expo/vector-icons";
import { BlurView } from "expo-blur";
import React, { useEffect, useMemo, useState } from "react";
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
  const { createHabit } = useCreateHabit();
  const { createHabitDay } = useCreateHabitDay();
  const { getHabits, habits } = useGetHabits();

  const [modalVisible, setModalVisible] = useState(false);
  const [approvedDayModalVisible, setApprovedDayModalVisible] = useState(false);
  const [newHabit, setNewHabit] = useState({
    habitName: "",
    habitImg: "",
  });
  const [habitList, setHabitList] = useState([
    {
      habitName: "No caffeine",
      habitImg: coffee,
      days: [
        { date: "2026-01-01", day: "MONDAY", completed: null },
        { date: "2026-01-02", day: "TUESDAY", completed: null },
        { date: "2026-01-03", day: "WEDNESDAY", completed: null },
        { date: "2026-01-04", day: "THURSDAY", completed: null },
        { date: "2026-01-05", day: "FRIDAY", completed: null },
        { date: "2026-01-06", day: "SATURDAY", completed: null },
        { date: "2026-01-07", day: "SUNDAY", completed: null },
      ],
    },
    {
      habitName: "No social media",
      habitImg: socialmedia,
      days: [
        { date: "2026-01-01", day: "MONDAY", completed: null },
        { date: "2026-01-02", day: "TUESDAY", completed: null },
        { date: "2026-01-03", day: "WEDNESDAY", completed: null },
        { date: "2026-01-04", day: "THURSDAY", completed: null },
        { date: "2026-01-05", day: "FRIDAY", completed: null },
        { date: "2026-01-06", day: "SATURDAY", completed: null },
        { date: "2026-01-07", day: "SUNDAY", completed: null },
      ],
    },
    {
      habitName: "Work on my project",
      habitImg: work,
      days: [
        { date: "2026-01-01", day: "MONDAY", completed: null },
        { date: "2026-01-02", day: "TUESDAY", completed: false },
        { date: "2026-01-03", day: "WEDNESDAY", completed: null },
        { date: "2026-01-04", day: "THURSDAY", completed: null },
        { date: "2026-01-05", day: "FRIDAY", completed: null },
        { date: "2026-01-06", day: "SATURDAY", completed: true },
        { date: "2026-01-07", day: "SUNDAY", completed: null },
      ],
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
              days: habit.days.map((day, dayIndex) =>
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

  const handleCreateHabit = async () => {
    try {
      if (!newHabit.habitName) return;

      // 1️⃣ Habit oluştur
      const createdHabit = await createHabit({
        habitName: newHabit.habitName,
        habitImg: newHabit.habitImg,
      });

      // 2️⃣ Bugünün tarihini al
      const today = new Date().toISOString().split("T")[0]; // yyyy-MM-dd

      // 3️⃣ İlk gün kaydını oluştur
      await createHabitDay(createdHabit.id, {
        date: today,
        completed: null,
      });

      // 4️⃣ UI temizle
      setNewHabit({ habitName: "", habitImg: "" });
      setModalVisible(false);

      // 5️⃣ Alışkanlıkları yeniden yükle
      await getHabits();
    } catch (error) {
      console.error("Habit creation flow failed:", error);
    }
  };

  useEffect(() => {
    getHabits();
  }, []);
  console.log("habits", habits);

  return (
    <SafeAreaView className="flex-1 relative">
      <ScrollView
        className="relative"
        contentContainerStyle={{ paddingBottom: 80 }}
      >
        {/* Header Section (My Challenges, Wed, 18) */}
        <View className="flex flex-col gap-8 px-4">
          <View className="w-full flex-col gap-2">
            <View className="w-full flex-row items-center justify-between">
              <Text className="text-gray-800 font-bold text-3xl">
                Alışkanlıklarım
              </Text>
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
            habitList={habits.map((habit) => ({
              habitName: habit.habitName,
              habitImg: habit.habitImg,
              days: habit.days,
            }))}
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
                  value={newHabit.habitName}
                  onChangeText={(text) =>
                    setNewHabit({ ...newHabit, habitName: text })
                  }
                />
                <TouchableOpacity
                  className="bg-emerald-500 p-2 rounded-md"
                  onPress={handleCreateHabit}
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
