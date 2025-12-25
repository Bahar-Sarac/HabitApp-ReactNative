import {
  CreateHabitDayService,
  HabitDayRequest,
} from "@/services/habit/createHabitDayService";
import { useState } from "react";

export const useCreateHabitDay = () => {
  const [loading, setLoading] = useState(false);
  const createHabitDay = async (
    habitId: number,
    createHabitRequest: HabitDayRequest
  ) => {
    setLoading(true);
    try {
      const response = await CreateHabitDayService(habitId, createHabitRequest);
      return response;
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  };
  return { createHabitDay, loading };
};
