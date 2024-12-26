import { createContext, useContext, useState } from 'react';

type CurrentLocationContextProps = [string, React.Dispatch<React.SetStateAction<string>>];

const CurrentLocationContext = createContext<CurrentLocationContextProps | []>([]);

const CurrentLocationProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentLocation, setCurrentLocation] = useState<string>('');

  return <CurrentLocationContext.Provider value={[currentLocation, setCurrentLocation]}>{children}</CurrentLocationContext.Provider>;
};

export default CurrentLocationProvider;

export const useCurrentLocationProvider = (): CurrentLocationContextProps => {
  const [currentLocation, setCurrentLocation] = useContext(CurrentLocationContext);

  if (currentLocation === undefined || setCurrentLocation === undefined) {
    throw new Error('Custom Error: currenLocation or setCurrentLocation is undefined');
  }

  return [currentLocation, setCurrentLocation];
};
