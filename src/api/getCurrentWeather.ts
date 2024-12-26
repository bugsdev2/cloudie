import axios from 'axios';

export async function getCurrentWeather(lat: number, lon: number): Promise<CurrentWeatherData | undefined> {
  if (lat === 0 && lon === 0) return undefined;

  const latitude = lat.toString();
  const longitude = lon.toString();

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,wind_speed_10m&timezone=auto`;

  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return undefined;
  }
}
