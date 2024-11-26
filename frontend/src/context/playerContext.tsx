import React, { createContext, useState } from "react";
import { Player } from "../interface/Player";

export interface Props {
  children: React.ReactNode;
}

export interface PlayerProps {
  player: Player | null;
  setPlayer: React.Dispatch<React.SetStateAction<Player | null>>;
}

export const playerContext = createContext<PlayerProps| null>(null);

const UserProvider = ({ children }: Props) => {
  const [player, setPlayer] = useState<Player | null>(null);
  return (
    <div>
      <playerContext.Provider value={{player, setPlayer}}>
        {children}
      </playerContext.Provider>
    </div>
  );
};

export default UserProvider
