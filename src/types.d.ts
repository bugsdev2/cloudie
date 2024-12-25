declare interface CurrentWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  current_units: {
    time: 'iso8601';
    interval: 'seconds';
    temperature_2m: '°C';
    relative_humidity_2m: '%';
    apparent_temperature: '°C';
    is_day: '';
    precipitation: 'mm';
    rain: 'mm';
    showers: 'mm';
    snowfall: 'cm';
    weather_code: 'wmo code';
    wind_speed_10m: 'km/h';
  };
  current: {
    time: string;
    interval: number;
    temperature_2m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
    is_day: number;
    precipitation: number;
    rain: number;
    showers: number;
    snowfall: number;
    weather_code: number;
    wind_speed_10m: number;
  };
}

declare interface HourlyWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: 'iso8601';
    temperature_2m: '°C';
    relative_humidity_2m: '%';
    dew_point_2m: '°C';
    apparent_temperature: '°C';
    precipitation_probability: '%';
    precipitation: 'mm';
    rain: 'mm';
    showers: 'mm';
    snowfall: 'cm';
    snow_depth: 'm';
    weather_code: 'wmo code';
    visibility: 'm';
    evapotranspiration: 'mm';
    et0_fao_evapotranspiration: 'mm';
    wind_speed_10m: 'km/h';
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    relative_humidity_2m: number[];
    dew_point_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    precipitation: number[];
    rain: number[];
    showers: number[];
    snowfall: number[];
    snow_depth: number[];
    weather_code: number[];
    visibility: number[];
    evapotranspiration: number[];
    et0_fao_evapotranspiration: number[];
    wind_speed_10m: number[];
  };
}

declare interface DailyWeatherData {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: {
    time: 'iso8601';
    weather_code: 'wmo code';
    temperature_2m_max: '°C';
    temperature_2m_min: '°C';
    apparent_temperature_max: '°C';
    apparent_temperature_min: '°C';
    sunrise: 'iso8601';
    sunset: 'iso8601';
    daylight_duration: 's';
    sunshine_duration: 's';
    uv_index_max: '';
    uv_index_clear_sky_max: '';
    precipitation_sum: 'mm';
    rain_sum: 'mm';
    showers_sum: 'mm';
    snowfall_sum: 'cm';
    precipitation_hours: 'h';
    precipitation_probability_max: '%';
    wind_speed_10m_max: 'km/h';
    wind_gusts_10m_max: 'km/h';
    wind_direction_10m_dominant: '°';
    shortwave_radiation_sum: 'MJ/m²';
    et0_fao_evapotranspiration: 'mm';
  };
  daily: {
    time: string[];
    weather_code: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    apparent_temperature_max: number[];
    apparent_temperature_min: number[];
    sunrise: string[];
    sunset: string[];
    daylight_duration: number[];
    sunshine_duration: number[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    precipitation_sum: number[];
    rain_sum: number[];
    showers_sum: number[];
    snowfall_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
    wind_speed_10m_max: number[];
    wind_gusts_10m_max: number[];
    wind_direction_10m_dominant: number[];
    shortwave_radiation_sum: number[];
    et0_fao_evapotranspiration: number[];
  };
}
