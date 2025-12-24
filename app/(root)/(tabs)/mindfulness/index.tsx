import BreathingExercises from "@/components/mindfulness/BreathingExercises";
import Header from "@/components/mindfulness/Header";
import Recommendations from "@/components/mindfulness/Recommendations";
import { useUser } from "@/context/UserContext";
import React from "react";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Mindfulness() {
  // Context içinden user bilgisini alıyoruz
  const { user } = useUser();

  return (
    <ScrollView className="flex-1 px-4">
      <SafeAreaView className="flex flex-col gap-20">
        <Header firstName={user?.firstName} lastName={user?.lastName} />
        <BreathingExercises />
        <View className="text-left">
          <Recommendations />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
