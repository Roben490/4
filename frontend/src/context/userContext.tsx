import React, { createContext, useState } from "react";
import { User } from "../interface/User";

export interface Props {
  children: React.ReactNode;
}

export interface UserProps {
  User: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const UserContext = createContext<UserProps | null>(null);

const UserProvider = ({ children }: Props) => {
  const [User, setUser] = useState<User | null>(null);

  return (
    <div>
      <UserContext.Provider value={{ User, setUser }}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
