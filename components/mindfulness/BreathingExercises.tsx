import React, { useEffect, useRef, useState } from 'react';
import { Animated, Easing, Text, View } from 'react-native';

export default function BreathingExercises() {
  const scale = useRef(new Animated.Value(1)).current;
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');

  useEffect(() => {
    const startBreathingCycle = () => {
      setPhase('inhale');
      Animated.timing(scale, {
        toValue: 1.5,
        duration: 4000,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setPhase('hold');
        setTimeout(() => {
          setPhase('exhale');
          Animated.timing(scale, {
            toValue: 1,
            duration: 7000,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }).start(() => {
            // döngüyü tekrar başlat
            startBreathingCycle();
          });
        }, 8000);
      });
    };

    startBreathingCycle();
  }, []);

  return (
    <View className="items-center my-4 ">
      <Animated.View
        style={{ transform: [{ scale }] }}
        className="w-32 h-32 bg-blue-500 rounded-full justify-around items-center p-4 flex-row"
      >
        <Text className="text-white text-center font-semibold text-base">
          {phase === 'inhale'
            ? 'Nefes al'
            : phase === 'hold'
            ? 'Nefesini tut'
            : 'Nefesini ver'}
        </Text>
      </Animated.View>
    </View>
  );
}