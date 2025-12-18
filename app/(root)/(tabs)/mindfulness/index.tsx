import BreathingExercises from '@/components/mindfulness/BreathingExercises';
import Header from '@/components/mindfulness/Header';
import Recommendations from '@/components/mindfulness/Recommendations';
import React from 'react';
import { ScrollView, View } from 'react-native';

export default function Mindfulness() {
  return (
    <ScrollView className="flex-1 bg-gray-50 ">
      <Header username="Bahar" />
      <BreathingExercises />
      <View className="text-left, bg-yellow-200">
      <Recommendations />
      </View>
    </ScrollView>
  );
}
