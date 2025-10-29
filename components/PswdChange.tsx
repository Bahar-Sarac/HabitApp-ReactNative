import React from "react";
import {
    StyleSheet,
    Text,
    TextInput,
    View
} from "react-native";

const Login = () => {
  return (
    <View style={styles.kullaniciKayit}>
      <Text style={styles.hosgeldinizText}>
        HabitApp
        {"\n"}Şifre Sıfırlama
      </Text>
      <View style={{ gap: 20, flexDirection: "column" }}>
        <View style={{ gap: 16, flexDirection: "column" }}>
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="E-mail"
          ></TextInput>
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="Yeni Şifre"
          ></TextInput>
          <TextInput
            style={styles.kullaniciKayitText}
            placeholder="Yeni Şifre Tekrar"
          ></TextInput>
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
  kullaniciKayitText: {
    width: 200,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  kullaniciKayitButon: {
    width: 100,
    marginLeft: 50,
    backgroundColor: "#82F27E",
    fontSize: 16,
    color: "#9130F2",
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
  },
});
