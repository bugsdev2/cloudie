import { useState, useCallback, useRef, useEffect } from 'react';
import { debounce } from 'lodash';

import { getGeoLocation } from '../api/getGeoLocation';
import { useCurrentPositionProvider } from '../providers/currentPositionProvider';
import { useCurrentLocationProvider } from '../providers/currentLocationProvider';

export const Header = () => {
  const inputRef = useRef<any>(null);

  const [searchQuery, setSearchQuery] = useState('');

  const [searchSuggestions, setSearchSuggestions] = useState<GeoCodingResult>();

  // I'm prefixing unused variables with an underscore "_ and a letter because my IDE is screaming at me to use them"

  const [_a, setCurrentPosition] = useCurrentPositionProvider();

  const [_b, setCurrentLocation] = useCurrentLocationProvider();

  useEffect(() => {
    getUserLocation();
  }, []);

  const getUserLocation = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setCurrentPosition({ latitude, longitude });
      },
      (error) => {
        console.error('Error getting user location:', error);
      }
    );
  };

  const getSearchSuggestions = useCallback(
    debounce(async (value) => {
      let data: GeoCodingResult = await getGeoLocation(value);
      if (data) {
        setSearchSuggestions(data);
      }
    }, 1000),
    []
  );

  const handleLocationSelect = (name: string, latitude: number, longitude: number) => {
    setCurrentPosition({ latitude, longitude });
    setCurrentLocation(name);
    searchSuggestions!.results.length = 0;
    inputRef.current.value = '';
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-text rounded-full px-5 py-2 min-w-80 flex relative">
        <input
          ref={inputRef}
          className="text-center bg-text outline-none w-full font-bold"
          type="text"
          id="search"
          name="search"
          onChange={(e) => {
            setSearchQuery(e.target.value);
            getSearchSuggestions(e.target.value);
          }}
        />
        <span className="bi bi-search cursor-pointer ps-1"></span>
        {searchQuery !== '' && searchSuggestions?.results?.length !== 0 && (
          <div
            className="absolute top-10 left-0  bg-text min-w-80 px-2  text-center flex flex-col gap-1"
            id="search-suggestions"
          >
            {searchSuggestions?.results?.map((item) => (
              <div
                key={item.id}
                onClick={() => handleLocationSelect(item.name, item.latitude, item.longitude)}
                className="cursor-pointer py-1"
              >
                {item.name}, {item.admin1}, {item.country}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
