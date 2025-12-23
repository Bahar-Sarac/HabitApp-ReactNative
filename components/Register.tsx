import { useRegister } from "@/hooks/auth/useRegister";
import { RegisterData } from "@/services/auth/registerService";
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

const Register = () => {
  const { register } = useRegister();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const data: RegisterData = {
    firstName,
    lastName,
    email,
    password,
  };

  const handleRegister = async () => {
    try {
      if (password === confirmPassword) {
        const response = await register(data);
        router.push("/habit");
        console.log("Registration successful:", response);
      } else {
        console.error("Parolalar eşleşmiyor.");
      }
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  return (
    <View style={styles.kullaniciKayit}>
      <Text style={styles.hosgeldinizText}>
        {"HabitApp'e"}
        {"\n"}Hoş Geldiniz!
      </Text>
      <View style={{ gap: 20, flexDirection: "column" }}>
        <View style={{ gap: 16, flexDirection: "column" }}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={20}
              color="#6EE7B7"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Ad"
              onChangeText={(text) => setFirstName(text)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="person-outline"
              size={20}
              color="#6EE7B7"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Soyad"
              onChangeText={(text) => setLastName(text)}
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#6EE7B7"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciKayitText}
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
              style={styles.kullaniciKayitText}
              placeholder="Şifre"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
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
              style={styles.kullaniciKayitText}
              placeholder="Şifre Tekrar"
              secureTextEntry={true}
              onChangeText={(text) => setConfirmPassword(text)}
            ></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={handleRegister}>
            <Text style={styles.kullaniciKayitButon}>Kaydol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  kullaniciKayit: {
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
  kullaniciKayitText: {
    width: 200,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  kullaniciKayitButon: {
    width: 120,
    marginLeft: 80,
    backgroundColor: "#6EE7B7",
    fontSize: 16,
    color: "#2563EB",
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
  },
});
