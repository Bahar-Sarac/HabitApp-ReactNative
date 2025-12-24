import { MeService } from "@/services/auth/meService";
import { useState } from "react";

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}

export const useMe = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const getMe = async () => {
    try {
      const response = await MeService();
      setUser(response);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setUser(null);
      console.error("Fetching user info failed:", error);
    }
  };
  return { getMe };
};
