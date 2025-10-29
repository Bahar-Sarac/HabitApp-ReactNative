import Login from "@/components/Login";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const [name, setName] = useState("Bahar");
  const [signIn, setSignIn] = useState(true);

  // signIn ? <Login /> : <Register />;
  {
    // signIn ---> true
    /* !signIn ---> false */
  }

  // if = ?
  // else = :

  return (
    <View style={styles.container}>
      <Login />

      {signIn ? (
        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          <Text style={{ color: "white" }}>Hesabınız yok mu?</Text>
          <TouchableOpacity onPress={() => setSignIn(false)}>
            <Text style={{ color: "#5fedd1ff" }}>Hemen Kaydol</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          <Text style={{ color: "white" }}>Hesabınız var mı?</Text>
          <TouchableOpacity onPress={() => setSignIn(true)}>
            <Text style={{ color: "#5fedd1ff" }}>Giriş yapın</Text>
          </TouchableOpacity>
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
    backgroundColor: "#440625ff",
    gap: 20,
    padding: 10,
  },
});
