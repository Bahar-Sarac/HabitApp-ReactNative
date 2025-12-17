import Calendar from '@/components/daily/Calendar';
import Header from '@/components/daily/Header';
import MoodModal from '@/components/daily/MoodModal';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface DayEntry {
  moodId: string | null;
  note: string;
  gratitude: [string, string, string];
}

export default function Daily() {
  const [history, setHistory] = useState<Record<string, DayEntry>>({});
  const [isModalVisible, setModalVisible] = useState(false);
  const [activeDate, setActiveDate] = useState<Date | null>(null);
  const [tempEntry, setTempEntry] = useState<DayEntry>({
    moodId: null,
    note: '',
    gratitude: ['', '', '']
  });

  const handleDayPress = (date: Date) => {
    const dateKey = date.toISOString().split('T')[0];
    setActiveDate(date);
    const existing = history[dateKey];
    setTempEntry(existing ? { ...existing } : { moodId: null, note: '', gratitude: ['', '', ''] });
    setModalVisible(true);
  };

  const handleSave = () => {
    if (!activeDate) return;
    const dateKey = activeDate.toISOString().split('T')[0];
    setHistory(prev => ({ ...prev, [dateKey]: tempEntry }));
    setModalVisible(false);
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <Header />
      <Calendar history={history} onDayPress={handleDayPress} />
      <MoodModal
        visible={isModalVisible}
        activeDate={activeDate}
        tempEntry={tempEntry}
        setTempEntry={setTempEntry}
        onClose={() => setModalVisible(false)}
        onSave={handleSave}
      />
    </SafeAreaView>
  );
}
