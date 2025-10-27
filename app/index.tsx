import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function Index() {
  const [isEnabled, setIsEnabled] = React.useState(false);

  return (
    <View style={styles.container}>
      {/*text1*/}
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 20,
        }}
      >
        <Text style={styles.matruskaText}>HabitApp</Text>
      </View>

      <View style={styles.kullanıcıGirişi}>
        <View style={styles.kullanıcıGirişiIcon}>
          <Ionicons name="person" color="purple" size={50} />
        </View>
        <View style={styles.kullanıcıGirişiText}>
          <TextInput placeholder="E-mail" />
        </View>
        <View style={styles.kullanıcıGirişiText}>
          <TextInput placeholder="Şifre" />
        </View>
        <View style={styles.kullanıcıGirişiSwitch}>
          <Switch
            value={isEnabled} // Switch’in mevcut durumu (true/false)
            onValueChange={setIsEnabled} // Tıklanınca değeri değiştirir
            trackColor={{ false: "#afadadff", true: "#5fedd1ff" }} // Arka plan rengi
            thumbColor="white" // Küçük dairenin rengi
          />
          <Text style={{color:"white"}}>Beni hatırla</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.kullanıcıGirişiButton}>Giriş</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: "purple",
    padding: 10,
  },
  matruska: {
    backgroundColor: "white",
    padding: 10,
    flexDirection: "column",
    gap: 10,
    borderRadius: 20,
  },
  matruskaText: {
    fontSize: 20,
    padding: 10,
    color: "black",
  },
  kullanıcıGirişiIcon: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginLeft: 50,
  },
  kullanıcıGirişi: {
    padding: 10,
    borderRadius: 20,
    gap: 16,
    width: 200,
    marginTop: 100,
    marginLeft: 100,
  },
  kullanıcıGirişiText: {
    backgroundColor: "white",
    fontSize: 16,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "white",
  },
  kullanıcıGirişiSwitch: {  
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,

  },
  kullanıcıGirişiButton: {
    width: 60,
    marginLeft: 60,
    backgroundColor: "white",
    fontSize: 16,
    textAlign: "center",
    paddingVertical: 8,
    borderRadius: 20,
  },
});
