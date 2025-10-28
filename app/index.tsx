import {
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.kullaniciKayit}>
        {/* <View style={styles.kullaniciKayitIcon}>
          <Ionicons name="person-add" color="#440625ff" size={50} />
        </View>*/}
        <Text style={styles.hosgeldinizText}>
          {"HabitApp'e"}
          {"\n"}Hoş Geldiniz!
        </Text>
        <View style={{gap:20, flexDirection: "column" }}>
          <View style={{ gap: 16, flexDirection: "column" }}>
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Ad-Soyad"
            ></TextInput>
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="E-posta"
            ></TextInput>
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Şifre"
            ></TextInput>
            <TextInput
              style={styles.kullaniciKayitText}
              placeholder="Şifre Tekrar"
            ></TextInput>
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.kullaniciKayitButon}>Kaydol</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{ flexDirection: "row", gap: 10, justifyContent: "center" }}
        >
          <Text style={{ color: "white" }}>Hesabınız var mı?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#5fedd1ff" }}>Giriş yapın</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#440625ff",
    padding: 10,
  },
  kullaniciKayit: {
    gap: 20,
  },
  hosgeldinizText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5fedd1ff",
  },
  /*kullaniciKayitIcon: {
    width: 80,
    height: 80,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 40,
    marginLeft: 50,
  },*/
  kullaniciKayitText: {
    width: 200,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
  },
  kullaniciKayitButon: {
    width: 100,
    marginLeft: 50,
    backgroundColor: "#5fedd1ff",
    fontSize: 16,
    fontWeight: "bold",
    color: "#440625ff",
    padding: 10,
    borderRadius: 20,
    textAlign: "center",
  },
});
