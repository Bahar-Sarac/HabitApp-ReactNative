import { RegisterData, RegisterService } from "@/services/auth/registerService";
import * as SecureStore from "expo-secure-store";

export const useRegister = () => {
  const register = async (data: RegisterData) => {
    try {
      const response = await RegisterService(data);
      if (response.token && !response.token.includes("HttpOnly")) {
        await SecureStore.setItemAsync("token", response.token);
      }
      console.log("Registration successful:", response);
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };
  return { register };
};
