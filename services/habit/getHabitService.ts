import { api } from "../api";

export interface Habit {
  id: number;
  habitName: string;
  habitImg?: string;
  days: {
    date: string;
    day: string;
    completed: boolean | null;
  }[];
}

export const GetHabitService = async () => {
  const response = await api.get(`/habits`);
  console.log("response-service", response);
  return response.data;
};
