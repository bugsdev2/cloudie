import { useEffect, useState } from 'react';
import { useCurrentPositionProvider } from '../providers/currentPositionProvider';
import { getCurrentWeather } from '../api/getCurrentWeather';
import { useCurrentLocationProvider } from '../providers/currentLocationProvider';
import { code } from '../constants/weatherCodes';

const CurrentWeather = () => {
  const [currentWeather, setCurrentWeather] = useState<CurrentWeatherData>();

  const [currentPosition] = useCurrentPositionProvider();

  const [currentLocation] = useCurrentLocationProvider();

  const weatherCodes: any = code;

  useEffect(() => {
    getWeatherDetails();
    console.log(currentPosition);
    console.log(currentLocation);
  }, [currentPosition]);

  const getWeatherDetails = async () => {
    const data = await getCurrentWeather(currentPosition.latitude, currentPosition.longitude);
    if (data) {
      setCurrentWeather(data);
    }
  };

  const processWeatherCodeImage = (code: number, isDay: number) => {
    return (
      <img
        className="w-56"
        src={isDay ? weatherCodes[code].day.image : weatherCodes[code].night.image}
      />
    );
  };

  const processWeatherCodeDescription = (code: number) => {
    return <p className="text-center text-text text-xl md:mt-2">{weatherCodes[code].day.description}</p>;
  };

  const Screen = () => (
    <div className="mt-10">
      <h2 className="text-text text-3xl font-bold text-center">{currentLocation}</h2>
      <div className="flex flex-col-reverse md:flex-row justify-center items-center md:gap-5">
        <div>
          <div className="text-6xl text-text text-center">
            {currentWeather?.current.temperature_2m}
            {currentWeather?.current_units.temperature_2m}
          </div>
          <div>{processWeatherCodeDescription(currentWeather!.current.weather_code)}</div>
        </div>
        <div>{processWeatherCodeImage(currentWeather!.current.weather_code, currentWeather!.current.is_day)}</div>
      </div>
      <div className="flex justify-center mt-5 text-base font-bold">
        <div className="flex flex-wrap justify-around border w-80 bg-text rounded-3xl gap-2">
          <div className="flex flex-col justify-center items-center p-3">
            <span className="bi bi-thermometer text-xl"></span>
            <p>
              {currentWeather?.current.apparent_temperature} {currentWeather?.current_units.apparent_temperature}
            </p>
            <p className="text-sm text-surface1">Feels like</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <span className="bi bi-wind  text-xl"></span>
            <p>
              {currentWeather?.current.wind_speed_10m} {currentWeather?.current_units.wind_speed_10m}
            </p>
            <p className="text-sm text-surface1">Wind</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <span className="bi bi-droplet-fill  text-xl"></span>
            <p>
              {currentWeather?.current.relative_humidity_2m} {currentWeather?.current_units.relative_humidity_2m}
            </p>
            <p className="text-sm text-surface1">Humidity</p>
          </div>{' '}
          <div className="flex flex-col justify-center items-center p-3">
            <span className="bi bi-cloud-rain-heavy-fill  text-xl"></span>
            <p>
              {currentWeather?.current.rain} {currentWeather?.current_units.rain}
            </p>
            <p className="text-sm text-surface1">Rain</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            {currentWeather?.current.is_day ? <span className="bi bi-sun-fill text-xl"></span> : <span className="bi bi-moon-fill text-xl"></span>}

            <p>{currentWeather?.current.is_day ? 'Day' : 'Night'}</p>
            <p className="text-sm text-surface1"> Sun Phase</p>
          </div>
          <div className="flex flex-col justify-center items-center p-3">
            <span className="bi bi-cloud-drizzle-fill  text-xl"></span>
            <p>
              {currentWeather?.current.precipitation} {currentWeather?.current_units.precipitation}
            </p>
            <p className="text-sm text-surface1">Precip.</p>
          </div>
        </div>
      </div>
    </div>
  );

  return <>{currentWeather && <Screen />}</>;
};

export default CurrentWeather;
