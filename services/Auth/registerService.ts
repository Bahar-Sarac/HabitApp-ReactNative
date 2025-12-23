import axios from "axios";
import { BASE_URL } from "../config";

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const RegisterService = async (data: RegisterData) => {
  const response = await axios.post(`${BASE_URL}/register`, data, {
    withCredentials: true,
  });
  return response.data;
};
