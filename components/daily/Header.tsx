import React from 'react';
import { Text, View } from 'react-native';

export default function Header() {
  return (
    <View className="bg-purple-600 p-4 shadow-sm border-green-300 z-10 pb-6">
      <Text className="text-2xl font-bold text-white text-center">
        Duygu & Not Takipçisi
      </Text>
      <Text className="text-base text-green-300 text-center mt-2">
        Detay eklemek için bir güne tıklayın.
      </Text>
    </View>
  );
}
