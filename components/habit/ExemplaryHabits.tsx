import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';

const eklenecekAliskanliklar = [
  { id: '1', title: '2L Su İçmek 💧' },
  { id: '2', title: 'Sabah Esnemesi 🧘' },
  { id: '3', title: 'Kitap Okumak 📚' },
  { id: '4', title: 'Egzersiz Yapmak 💪' },
  { id: '5', title: 'Erken Kalkmak 🌅' },
  { id: '6', title: 'Yabancı Dil Çalışmak 🗣️' },
  { id: '7', title: 'Yürüyüşe Çıkmak 🚶🏻‍♀️' },
];

/**
 * Tek bir yatay alışkanlık kartı (HabitCard).
 */
const HabitCard = ({ title, onPress }: { title: string; onPress: () => void }) => (
  <TouchableOpacity
    className="w-44 h-8 rounded-xl justify-center items-center shadow-lg active:bg-grey-300"
    onPress={onPress}
    activeOpacity={0.8}
  >
    <Text
      className="font-bold text-sm text-center p-1"
      numberOfLines={2}
    >
      {title}
    </Text>
  </TouchableOpacity>
);

/* Ana Alışkanlık Önerileri Bileşeni: ExemplaryHabits*/
export const ExemplaryHabits = () => {
  // Alışkanlık kartına tıklandığında çalışacak örnek fonksiyon
  const handlePress = (title: string) => {
    console.log(`[EKLEME İŞLEMİ]: "${title}" alışkanlığı seçildi.`);
    // Gerçek uygulamada: state güncelleme, modal açma veya navigasyon yapma
  };

  return (
    <View
      className="mt-6 pb-5 bg-white border-t border-gray-100"
    >
      {/* Yatay Kaydırma Listesi */}
      <FlatList
        data={eklenecekAliskanliklar}
        renderItem={({ item }) => (
          <HabitCard
            title={item.title}
            onPress={() => handlePress(item.title)}
          />
        )}
        keyExtractor={item => item.id}
        horizontal={true} // Yatay kaydırmayı etkinleştirir
        showsHorizontalScrollIndicator={false} // Yatay kaydırma çubuğunu gizler
      />
    </View>
  );
};
