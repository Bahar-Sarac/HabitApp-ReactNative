import {
  CreateHabitService,
  HabitRequest,
} from "@/services/habit/createHabitService";
import { useState } from "react";

export const useCreateHabit = () => {
  const [loading, setLoading] = useState(false);

  const createHabit = async (habitRequest: HabitRequest) => {
    setLoading(true);
    try {
      const response = await CreateHabitService(habitRequest);
      console.log("Habit created:", response);
      return response;
    } catch (error) {
      console.error("Error creating habit:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { createHabit, loading };
};
