import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.kullaniciKayit}>
      <Text style={styles.hosgeldinizText}>
        HabitApp
        {"\n"}Şifre Sıfırlama
      </Text>
      <View style={{ gap: 20, flexDirection: "column" }}>
        <View style={{ gap: 16, flexDirection: "column" }}>
          <View style={styles.inputContainer}>
            <Ionicons
              name="mail-outline"
              size={20}
              color="#82F27E"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="E-mail"
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#82F27E"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Yeni Şifre"
            ></TextInput>
          </View>
          <View style={styles.inputContainer}>
            <Ionicons
              name="lock-closed-outline"
              size={20}
              color="#82F27E"
              style={{ marginRight: 8 }}
            />
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Yeni Şifre Tekrar"
            ></TextInput>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  kullaniciKayit: {
    gap: 20,
  },
  hosgeldinizText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#82F27E",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#82F27E",
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
});
