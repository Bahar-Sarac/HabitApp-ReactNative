import { MeService } from "@/services/auth/meService";
import * as SecureStore from "expo-secure-store";
import { useState } from "react";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

export const useMe = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const getMe = async () => {
    try {
      const token = await SecureStore.getItemAsync("token");

      if (!token) {
        setLoading(false);
        setUser(null);
        return null;
      }

      const response = await MeService(token);
      setUser(response);
      return response;
    } catch (error) {
      setUser(null);
      console.error("Fetching user info failed:", error);
    } finally {
      setLoading(false);
    }
  };
  return { getMe, user, setUser, loading };
};
