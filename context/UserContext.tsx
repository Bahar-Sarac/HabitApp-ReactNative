import { useMe, User } from "@/hooks/auth/useMe";
import { createContext, useEffect } from "react";

export interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  loading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { getMe, user, setUser, loading } = useMe();
  useEffect(() => {
    getMe();
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser, loading }}>
      {children}
    </UserContext.Provider>
  );
};
