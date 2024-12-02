import React, { createContext, useState } from "react";
import { User } from "../interface/User"
import { ReactNodeChildrenProp } from "../interface/ReactNodeChildrenProp";

interface UserContextProp {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const userContext = createContext<UserContextProp | null>(null)

const UserProvider = ({ children }: ReactNodeChildrenProp) => {
    const [user, setUser] = useState<User | null>(null);
  return (
    <div>
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    </div>
  )
}

export { UserProvider }
