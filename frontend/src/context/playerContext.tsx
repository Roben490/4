import React, { createContext, useState } from "react";
import { Player } from "../interface/Player";

export interface Props {
  children: React.ReactNode;
}

export interface PlayerProps {
  player: Player;
  setPlayer: React.Dispatch<React.SetStateAction<Player>>;
}

export const playerContext = createContext<PlayerProps | undefined>(undefined)

const UserProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Player>({
    username: '',
    password: '',
    email: '',
  });

  return (
    <div>
      <playerContext.Provider value={{player, setPlayer}}>
        {children}
      </playerContext.Provider>
    </div>
  );
};

export default UserProvider
