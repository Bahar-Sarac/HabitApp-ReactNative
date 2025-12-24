import React from "react";
import { Text, View } from "react-native";

interface HeaderProps {
  firstName?: string;
  lastName?: string;
}

export default function Header({ firstName, lastName }: HeaderProps) {
  return (
    <View className="">
      <Text className="text-2xl font-bold text-center">
        Hoş Geldin,{" "}
        <Text className="font-semibold text-red-800">
          {firstName} {lastName}
        </Text>
      </Text>
    </View>
  );
}
