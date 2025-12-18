import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Register = () => {
  return (
    <View style={styles.kullaniciKayit}>
      <Text style={styles.hosgeldinizText}>
        {"HabitApp'e"}
        {"\n"}Hoş Geldiniz!
      </Text>
      <View style={{ gap: 20, flexDirection: "column" }}>
        <View style={{ gap: 16, flexDirection: "column" }}>
          <View style={styles.inputContainer}>
          <Ionicons name="person-outline" size={20} color="#6EE7B7" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="Ad-Soyad"
          ></TextInput>
          </View>
          <View style={styles.inputContainer}>
          <Ionicons name="mail-outline" size={20} color="#6EE7B7" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="E-posta"
          ></TextInput>
          </View>
          <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#6EE7B7" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="Şifre"
          ></TextInput>
          </View>
          <View style={styles.inputContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="#6EE7B7" style={{ marginRight: 8 }} />
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="Şifre Tekrar"
          ></TextInput>
          </View>
        </View>
        <View>
          <TouchableOpacity>
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
