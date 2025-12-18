import { clsx } from 'clsx';
import { format } from 'date-fns';
import { tr } from 'date-fns/locale';
import React from 'react';
import { FlatList, KeyboardAvoidingView, Modal, Platform, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { twMerge } from 'tailwind-merge';

interface Mood {
  id: string;
  label: string;
  color: string;
  border: string;
  selectedRing: string;
}

interface DayEntry {
  moodId: string | null;
  note: string;
  gratitude: [string, string, string];
}

interface MoodModalProps {
  visible: boolean;
  activeDate: Date | null;
  tempEntry: DayEntry;
  setTempEntry: (entry: DayEntry) => void;
  onClose: () => void;
  onSave: () => void;
}

const MOODS: Mood[] = [
  { id: 'happy', label: 'Neşeli', color: 'bg-yellow-400', border: 'border-yellow-300', selectedRing: 'ring-yellow-400' },
  { id: 'sad', label: 'Hüzünlü', color: 'bg-blue-400', border: 'border-blue-300', selectedRing: 'ring-blue-400' },
  { id: 'stressful', label: 'Stresli', color: 'bg-orange-400', border: 'border-orange-300', selectedRing: 'ring-orange-400' },
  { id: 'mixed', label: 'Karışık', color: 'bg-purple-400', border: 'border-purple-300', selectedRing: 'ring-purple-400' },
];

function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export default function MoodModal({ visible, activeDate, tempEntry, setTempEntry, onClose, onSave }: MoodModalProps) {
  const updateGratitude = (text: string, index: number) => {
    const newGratitude = [...tempEntry.gratitude] as [string, string, string];
    newGratitude[index] = text;
    setTempEntry({ ...tempEntry, gratitude: newGratitude });
  };

  return (
    <Modal visible={visible} animationType="slide" transparent onRequestClose={onClose}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className="flex-1 justify-end bg-black/60">
        <View className="bg-white rounded-t-3xl p-6 h-[90%] shadow-2xl">
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity onPress={onClose}><Text className="text-blue-500 font-semibold text-lg">Vazgeç</Text></TouchableOpacity>
            <Text className="text-xl font-bold text-gray-800">{activeDate && format(activeDate, 'd MMMM yyyy', { locale: tr })}</Text>
            <TouchableOpacity onPress={onSave}><Text className="text-blue-600 font-bold text-xl">Kaydet</Text></TouchableOpacity>
          </View>

          <FlatList
            data={[]}
            renderItem={null}
            ListHeaderComponent={
              <>
                <Text className="font-bold text-gray-800 text-lg mb-4">Bugün modun nasıldı?</Text>
                <View className="flex-row justify-between mb-8 px-2">
                  {MOODS.map((mood) => (
                    <TouchableOpacity key={mood.id} onPress={() => setTempEntry({ ...tempEntry, moodId: mood.id })} className="items-center">
                      <View className={cn(
                        "w-16 h-16 rounded-full mb-2 border-2 items-center justify-center transition-all",
                        mood.color, mood.border,
                        tempEntry.moodId === mood.id ? "border-4 scale-110 shadow-md" : "opacity-40 border-transparent"
                      )} />
                      <Text className="text-sm font-medium text-gray-700">{mood.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>

                <View className="mb-8">
                  <View className="flex-row justify-between mb-2">
                    <Text className="font-bold text-gray-800 text-lg">Günün Notu</Text>
                    <Text className="text-sm text-gray-500">{tempEntry.note.length}/100</Text>
                  </View>
                  <TextInput
                    className="bg-gray-50 border border-gray-200 rounded-xl p-4 h-32 text-base text-gray-800"
                    multiline textAlignVertical="top"
                    placeholder="Bugün neler oldu?"
                    maxLength={100}
                    style={{ fontSize: 16 }}
                    value={tempEntry.note}
                    onChangeText={(text) => setTempEntry({ ...tempEntry, note: text })}
                  />
                </View>

                <View className="mb-10">
                  <Text className="font-bold text-gray-800 text-lg mb-4">Şükür Defteri (3 Şey)</Text>
                  {[0,1,2].map((i) => (
                    <View key={i} className="mb-4">
                      <View className="flex-row items-center bg-gray-50 border border-gray-200 rounded-xl px-4 py-1">
                        <Text className="text-gray-400 font-bold mr-3 text-lg">{i+1}.</Text>
                        <TextInput
                          className="flex-1 py-4 text-base text-gray-800"
                          placeholder="Şükrettiğin bir şey..."
                          placeholderTextColor="#9CA3AF"
                          maxLength={75}
                          style={{ fontSize: 16 }}
                          value={tempEntry.gratitude[i]}
                          onChangeText={(text) => updateGratitude(text, i)}
                        />
                        <Text className="text-xs text-gray-400 ml-2">{tempEntry.gratitude[i].length}/75</Text>
                      </View>
                    </View>
                  ))}
                </View>
              </>
            }
          />
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}
