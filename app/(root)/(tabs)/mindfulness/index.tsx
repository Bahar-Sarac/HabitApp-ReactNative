import Header from '@/components/mindfulness/Header';
import React from 'react';
import { ScrollView } from 'react-native';

export default function Mindfulness() {
  return (
    <ScrollView className="flex-1 bg-white">
      <Header username="Bahar" />
    </ScrollView>
  );
}
