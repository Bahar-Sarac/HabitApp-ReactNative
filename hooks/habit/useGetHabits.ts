import { GetHabitService, Habit } from "@/services/habit/getHabitService";
import { useEffect, useState } from "react";

export const useGetHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);
  const [loading, setLoading] = useState(true);

  const getHabits = async () => {
    setLoading(true);
    try {
      const response = await GetHabitService();
      setHabits(response);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getHabits();
  }, []);

  return { getHabits, loading, habits };
};
