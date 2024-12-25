import axios from 'axios';

export async function getHourlyWeather(lat: string, lon: string): Promise<HourlyWeatherData | undefined> {
  const latitude = lat.toString();
  const longitude = lon.toString();

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relative_humidity_2m,dew_point_2m,apparent_temperature,precipitation_probability,precipitation,rain,showers,snowfall,snow_depth,weather_code,visibility,evapotranspiration,et0_fao_evapotranspiration,wind_speed_10m&timezone=auto&forecast_days=8`;

  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return undefined;
  }
}
