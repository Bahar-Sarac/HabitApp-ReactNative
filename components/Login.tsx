import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Login = () => {
  return (
    <View style={styles.kullaniciGiris}>
      <Text style={styles.hosgeldinizText}>
        {"HabitApp'e"}
        {"\n"}Hoş Geldiniz!
      </Text>
      <View style={{ gap: 20, flexDirection: "column" }}>
        <View style={{ gap: 16, flexDirection: "column" }}>
          <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#6EE7B7" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.kullaniciGirisText}
            placeholder="E-posta"
          ></TextInput>
          </View>
          <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#6EE7B7" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.kullaniciGirisText}
            placeholder="Şifre"
          ></TextInput>
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
