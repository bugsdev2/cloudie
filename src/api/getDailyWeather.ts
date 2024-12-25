import axios from 'axios';

export async function getDailyWeather(lat: number, lon: number): Promise<DailyWeatherData | undefined> {
  const latitude = lat.toString();
  const longitude = lon.toString();

  const url = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,apparent_temperature_min,sunrise,sunset,daylight_duration,sunshine_duration,uv_index_max,uv_index_clear_sky_max,precipitation_sum,rain_sum,showers_sum,snowfall_sum,precipitation_hours,precipitation_probability_max,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,shortwave_radiation_sum,et0_fao_evapotranspiration&timezone=auto&forecast_days=14`;

  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return undefined;
  }
}
