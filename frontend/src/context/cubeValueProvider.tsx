import React, { useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface CubeValueProps {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}

export const CubeValueContext = React.createContext<CubeValueProps | undefined>(undefined);


export default function CubeValueProvider({ children }: Props) {
  const [value, setValue] = useState<number>(0);

  return (
    <CubeValueContext.Provider value={{ value, setValue }}>
      {children}
    </CubeValueContext.Provider>
  );
}
