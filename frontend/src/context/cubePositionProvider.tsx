import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface CubePositionProps {
    x: number, 
    y: number,
    setPositionX: React.Dispatch<React.SetStateAction<number>>;
    setPositionY: React.Dispatch<React.SetStateAction<number>>;
}

export const CubePositionContext = React.createContext<CubePositionProps | undefined>(undefined);


export default function CubePositionProvider({ children }: Props) {
  const [x, setPositionX] = useState<number>(0);
  const [y, setPositionY] = useState<number>(0);


  return (
    <CubePositionContext.Provider value={{ x, setPositionX, y, setPositionY }}>
      {children}
    </CubePositionContext.Provider>
  );
}
