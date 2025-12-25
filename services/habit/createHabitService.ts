import { api } from "../api";

export interface HabitRequest {
  habitName: string;
  habitImg?: string;
}

export const CreateHabitService = async (habitRequest: HabitRequest) => {
  const response = await api.post(`/habits`, habitRequest);
  return response.data;
};
