import axios from 'axios';

export async function getGeoLocation(location: string) {
  const url = `https://geocoding-api.open-meteo.com/v1/search?name=${location}&count=5&language=en&format=json`;

  try {
    const response = await axios(url);
    return response.data;
  } catch (err) {
    return undefined;
  }
}
