import axios from "axios";
import { BASE_URL } from "../config";

export interface LoginData {
  email: string;
  password: string;
}

export const LoginService = async (data: LoginData) => {
  const response = await axios.post(`${BASE_URL}/login`, data, {
    withCredentials: true,
  });
  return response.data;
};
