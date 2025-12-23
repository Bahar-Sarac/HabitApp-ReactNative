import { useLogin } from "@/hooks/auth/useLogin";
import { LoginData } from "@/services/auth/loginService";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export interface LoginProps {
  setScreen: (screen: "login" | "register" | "pswdChange") => void;
}

const Login = ({ setScreen }: LoginProps) => {
  const { login } = useLogin();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const data: LoginData = {
    email: email,
    password: password,
  };

  const handleLogin = async () => {
    try {
      if (!email || !password) {
        console.error("Lütfen e-posta ve şifre giriniz.");
        return;
      }
      const response = await login(data);
      router.push("/habit");
      console.log("Registration successful:", response);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <View style={styles.kullaniciGiris}>
      <Text style={styles.hosgeldinizText}>
        {"HabitApp'e"}
        {"\n"}Hoş Geldiniz!
      </Text>
      <View style={{ gap: 20, flexDirection: "column" }}>
        <View style={{ gap: 16, flexDirection: "column" }}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#6EE7B7"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciGirisText}
              placeholder="E-posta"
              onChangeText={(text) => setEmail(text)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#6EE7B7"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciGirisText}
              placeholder="Şifre"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
            ></TextInput>
          </View>
          {/* Şifremi Unuttum */}
          <View className="items-end">
            <TouchableOpacity onPress={() => setScreen("pswdChange")}>
              <Text className="text-emerald-300 items-end">
                Şifremi Unuttum
              </Text>
            </TouchableOpacity>
          </View>
          {/* Giriş Yap Butonu */}
          <View>
            <TouchableOpacity onPress={handleLogin}>
              <Text className="w-40 ml-16 bg-emerald-300 color-blue-600 p-2 rounded-2xl text-center">
                Giriş Yap
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  kullaniciGiris: {
    gap: 20,
  },
  hosgeldinizText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#6EE7B7",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#6EE7B7",
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
  },
  kullaniciGirisText: {
    width: 200,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
});
