import { useUser } from "@/context/UserContext";
import { LoginData, LoginService } from "@/services/auth/loginService";
import * as SecureStore from "expo-secure-store";

export interface UserResponse {
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
  };
  token: string;
}

export const useLogin = () => {
  const { setUser } = useUser();
  const login = async (data: LoginData) => {
    try {
      const response: UserResponse = await LoginService(data);

      if (response.token && !response.token.includes("HttpOnly")) {
        await SecureStore.setItemAsync("token", response.token);
      }

      setUser(response.user);
      console.log("Login successful:", response);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };
  return { login };
};
