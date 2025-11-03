import { Stack } from "expo-router";

export default function TabsLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)/emotion" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)/habit" options={{ headerShown: false }} />
    </Stack>
  );
}
