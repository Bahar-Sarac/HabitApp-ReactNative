import axios from "axios";
import { BASE_URL } from "../config";

export const MeService = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/users/me`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
