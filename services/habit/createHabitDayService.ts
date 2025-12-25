import { api } from "../api";

export interface HabitDayRequest {
  date: string;
  completed: boolean | null;
}

export const CreateHabitDayService = async (
  habitId: number,
  habitRequest: HabitDayRequest
) => {
  const response = await api.post(`/habits/${habitId}/days`, habitRequest);
  return response.data;
};
