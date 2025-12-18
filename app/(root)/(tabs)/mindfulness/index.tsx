import BreathingExercises from '@/components/mindfulness/BreathingExercises';
import Header from '@/components/mindfulness/Header';
import React from 'react';
import { ScrollView } from 'react-native';

export default function Mindfulness() {
  return (
    <ScrollView className="flex-1 bg-gray-50">
      <Header username="Bahar" />
      <BreathingExercises />
    </ScrollView>
  );
}
