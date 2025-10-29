import Login from "@/components/Login";
import PswdChange from "@/components/PswdChange";
import Register from "@/components/Register";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [screen, setScreen] = useState("login"); // login | register | pswdChange

  return (
    <View style={styles.container}>
      {screen === "login" && (
        <View
          style={{ flexDirection: "column", gap: 10, justifyContent: "center" }}
        >
          <Login />
          {/* Şifremi Unuttum */}
          <View style={{ alignItems: "flex-end" }}>
            <TouchableOpacity onPress={() => setScreen("pswdChange")}>
              <Text style={{ color: "#82F27E", alignItems: "flex-end" }}>
                Şifremi Unuttum
              </Text>
            </TouchableOpacity>
          </View>
          {/* Giriş Yap Butonu */}
          <View>
            <TouchableOpacity>
              <Text style={styles.kullaniciKayitButon}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
          {/* Kayıt Ol */}
          <View
            style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
          >
            <Text style={{ color: "white", fontSize: 16 }}>
              Hesabınız yok mu?
            </Text>
            <TouchableOpacity onPress={() => setScreen("register")}>
              <Text style={{ color: "#82F27E", fontSize: 16 }}>Kaydolun</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {screen === "register" && (
        <View
          style={{ flexDirection: "column", gap: 10, justifyContent: "center" }}
        >
          <Register />
          <View
            style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
          >
            <Text style={{ color: "white" }}>Hesabınız var mı?</Text>
            <TouchableOpacity onPress={() => setScreen("login")}>
              <Text style={{ color: "#82F27E" }}>Giriş Yapın</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {screen === "pswdChange" && (
        <View
          style={{ flexDirection: "column", gap: 10, justifyContent: "center" }}
        >
          <PswdChange />
          <View
            style={{
              flexDirection: "column",
              gap: 10,
              justifyContent: "center",
            }}
          >
            <View>
              <TouchableOpacity onPress={() => setScreen("login")}>
                <Text style={styles.kullaniciKayitButon}>Kaydet</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setScreen("login")}>
              <Text style={{ color: "#82F27E", textAlign: "center" }}>
                Geri Dön
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9130F2",
    gap: 20,
    padding: 10,
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
