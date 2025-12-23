import { RegisterData, RegisterService } from "@/services/auth/registerService";

export const useRegister = () => {
  const register = async (data: RegisterData) => {
    try {
      const response = await RegisterService(data);
      console.log("Registration successful:", response);
      return response;
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  };
  return { register };
};
