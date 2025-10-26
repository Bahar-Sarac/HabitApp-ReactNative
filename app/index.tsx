import { Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>HabitApp</Text>
      <Text>Alışkanlık Takip Uygulaması</Text>
      <TouchableOpacity>Giriş Yap</TouchableOpacity>
    </View>
  );
}
