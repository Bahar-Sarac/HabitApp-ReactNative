import axios from "axios";
import { BASE_URL } from "../config";

export const MeService = async (token: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
