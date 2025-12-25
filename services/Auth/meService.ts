import { api } from "../api";

export const MeService = async (token: string) => {
  try {
    const response = await api.get(`/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
