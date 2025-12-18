import React from 'react';
import { Text, View } from 'react-native';

interface HeaderProps {
  username: string;
}

export default function Header({ username }: HeaderProps) {
  return (
    <View className="bg-white p-4 rounded-xl m-6">
      <Text className="text-xl font-bold text-center">
        Hoş Geldin {username}
      </Text>
    </View>
  );
}
