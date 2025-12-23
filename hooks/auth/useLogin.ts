import { LoginData, LoginService } from "@/services/auth/loginService";

export const useLogin = () => {
  const login = async (data: LoginData) => {
    try {
      const response = await LoginService(data);
      console.log("Login successful:", response);
      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  };
  return { login };
};
