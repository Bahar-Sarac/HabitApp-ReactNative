import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false, // Etiketleri gizle
        headerShown: false, 
        tabBarActiveTintColor: "#10B981",
        tabBarInactiveTintColor: "#9CA3AF",
        tabBarStyle: {
            // Konumlandırma ve Boşluk
            position: 'absolute',
            marginHorizontal: 16,
            marginBottom: 16,
            // Görünüm
            height: 56, 
            backgroundColor: 'white', 
            borderRadius: 20,
            
        },
      }}
    >
      {/*Habits Sekmesi*/}
      <Tabs.Screen
        name="habit" 
        options={{
          title: 'Habits', 
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="checkbox-outline" size={size} color={color} />
          ),
        }}
      />

      {/*Daily Sekmesi*/}
      <Tabs.Screen
        name="daily" 
        options={{
          title: 'Daily',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />

      {/*Mindfulness Sekmesi*/}
      <Tabs.Screen
        name="mindfulness" 
        options={{
          title: 'Mindfulness',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="leaf-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
