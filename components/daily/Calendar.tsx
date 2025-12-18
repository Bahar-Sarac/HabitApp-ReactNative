import { clsx } from 'clsx';
import { eachDayOfInterval, endOfMonth, endOfWeek, format, isSameDay, isSameMonth, startOfMonth, startOfWeek } from 'date-fns';
import { tr } from 'date-fns/locale';
import React from 'react';
import { Dimensions, FlatList, Text, TouchableOpacity, View } from 'react-native';
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

interface MonthBlockProps {
  monthDate: Date;
  history: Record<string, DayEntry>;
  onDayPress: (date: Date) => void;
  screenWidth: number;
}

interface CalendarProps {
  history: Record<string, DayEntry>;
  onDayPress: (date: Date) => void;
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

export default function Calendar({ history, onDayPress }: CalendarProps) {
  const { width: SCREEN_WIDTH } = Dimensions.get('window');
  const today = new Date();
  const monthsToRender = Array.from({ length: 12 }, (_, i) => new Date(today.getFullYear(), today.getMonth() - i, 1));

  return (
    <FlatList
      data={monthsToRender}
      keyExtractor={(item) => item.toString()}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <MonthBlock monthDate={item} history={history} onDayPress={onDayPress} screenWidth={SCREEN_WIDTH} />
      )}
    />
  );
}

function MonthBlock({ monthDate, history, onDayPress, screenWidth }: MonthBlockProps) {
  const monthStart = startOfMonth(monthDate);
  const monthEnd = endOfMonth(monthDate);
  const startDate = startOfWeek(monthStart, { weekStartsOn: 1 });
  const endDate = endOfWeek(monthEnd, { weekStartsOn: 1 });
  const days = eachDayOfInterval({ start: startDate, end: endDate });
  const weekDays = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
  const CELL_SIZE = (screenWidth - 48) / 7;

  return (
    <View className="w-screen items-center justify-start bg-gray-100">
      <View className="bg-gray-50 p-4 w-11/12 rounded-2xl shadow-3xl shadow-blue-600">
        <Text className="text-2xl font-bold text-gray-800 mb-6 capitalize text-center">
          {format(monthDate, 'MMMM yyyy', { locale: tr })}
        </Text>

        <View className="flex-row mb-4 border-b border-gray-100 pb-2">
          {weekDays.map((day) => (
            <Text key={day} className="flex-1 text-center text-base text-gray-400 font-bold">{day}</Text>
          ))}
        </View>

        <View className="flex-row flex-wrap justify-between">
          {days.map((day, idx) => {
            const dateKey = format(day, 'yyyy-MM-dd');
            const dayData = history[dateKey];
            const savedMoodId = dayData?.moodId;
            const savedMood = MOODS.find(m => m.id === savedMoodId);
            const hasContent = dayData && (dayData.note.length > 0 || dayData.gratitude.some(g => g.length > 0));
            const isCurrentMonth = isSameMonth(day, monthDate);
            const isToday = isSameDay(day, new Date());

            return (
              <TouchableOpacity
                key={idx}
                onPress={() => onDayPress(day)}
                style={{ width: CELL_SIZE, height: CELL_SIZE * 1.2 }}
                className="mb-2"
              >
                <View className={cn(
                  "flex-1 items-center justify-center rounded-xl border relative",
                  savedMood ? savedMood.color : "bg-white",
                  savedMood ? savedMood.border : "border-transparent",
                  isToday && !savedMood && "border-gray-300 bg-gray-50",
                  !isCurrentMonth && "opacity-20"
                )}>
                  <Text className={cn(
                    "text-base font-bold",
                    savedMood ? "text-white" : "text-gray-700",
                    !isCurrentMonth && "text-gray-400"
                  )}>{format(day, 'd')}</Text>
                  {hasContent && !savedMood && <View className="absolute bottom-2 w-1.5 h-1.5 bg-gray-400 rounded-full" />}
                  {hasContent && savedMood && <View className="absolute bottom-2 w-1.5 h-1.5 bg-white/80 rounded-full" />}
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </View>
  );
}
