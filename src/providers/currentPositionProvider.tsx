import { createContext, useContext, useState } from 'react';

type Position = {
  latitude: number;
  longitude: number;
};

type CurrentPositionContextProps = [Position, React.Dispatch<React.SetStateAction<Position>>];

const CurrentPositionContext = createContext<CurrentPositionContextProps | []>([]);

const CurrentPositionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentPosition, setCurrentPosition] = useState<Position>({ latitude: 0, longitude: 0 });

  return <CurrentPositionContext.Provider value={[currentPosition, setCurrentPosition]}>{children}</CurrentPositionContext.Provider>;
};

export default CurrentPositionProvider;

export const useCurrentPositionProvider = (): CurrentPositionContextProps => {
  const [currentPosition, setCurrentPosition] = useContext(CurrentPositionContext);

  if (currentPosition === undefined || setCurrentPosition === undefined) {
    throw new Error('Custom Error: customPosition or setCustomPosition is undefined');
  }

  return [currentPosition, setCurrentPosition];
};
