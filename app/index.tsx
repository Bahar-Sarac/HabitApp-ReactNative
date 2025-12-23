import Login from "@/components/Login";
import PswdChange from "@/components/PswdChange";
import Register from "@/components/Register";
import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import "./globals.css";

export default function Index() {
  const [screen, setScreen] = useState("login"); // login | register | pswdChange

  return (
    <View className="flex-1 justify-center items-center bg-blue-600 p-2">
      {screen === "login" && (
        <View className="flex-col gap-4 justify-center">
          <Login setScreen={setScreen} />
          {/* Kayıt Ol */}
          <View className="flex-row gap-2 justify-center">
            <Text className="text-white text-lg">Hesabınız yok mu?</Text>
            <TouchableOpacity onPress={() => setScreen("register")}>
              <Text className="text-emerald-300 text-lg">Kaydolun</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {screen === "register" && (
        <View className="flex-col gap-4 justify-center">
          <Register />
          <View className="flex-row gap-2 justify-center">
            <Text className="text-white text-lg">Hesabınız var mı?</Text>
            <TouchableOpacity onPress={() => setScreen("login")}>
              <Text className="text-emerald-300 text-lg ">Giriş Yapın</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {screen === "pswdChange" && (
        <View className="flex-col gap-4 justify-center">
          <PswdChange />
          <View className="flex-col gap-4 justify-center">
            <View>
              <TouchableOpacity onPress={() => setScreen("login")}>
                <Text className="w-40 ml-16 bg-emerald-300 color-blue-600 p-2 rounded-2xl text-center text-lg">
                  Kaydet
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setScreen("login")}>
              <Text className="text-emerald-300 text-center text-lg">
                Geri Dön
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}
