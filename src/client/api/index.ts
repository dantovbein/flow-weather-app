import axios from 'axios';

const API_PATH: string = 'http://localhost:5350/api/v1';

export const getCityForecastByName = async (cityName: string):Promise<IGetCityForecastByName> => {
  const response: IAPIResponse = await axios.get(`${API_PATH}/current/${cityName}`);
  return response.data as IGetCityForecastByName;
}

export const getCityForecastByCoords = async (coords: CoordsType):Promise<IGetCityForecastByCoords> => {
  const response: IAPIResponse = await axios
    .get(`${API_PATH}/forecast`, {
      params: {
        lat: coords.lat,
        lon: coords.lon,
      }
    });
  return response.data as IGetCityForecastByCoords;
}

export const getCityWeatherByCoords = async (coords: CoordsType):Promise<IAPIResponse> => {
  const response: IAPIResponse = await axios
    .get(`${API_PATH}/location`, {
      params: {
        lat: coords.lat,
        lon: coords.lon,
      }
    });
  return response.data as IAPIResponse;
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!//
// EL SIGUIENTE MÉTODO LO DEJÉ COMENTADO PARA MOSTRAR LA DIFERENCIA //
// ENTRE LA LÓGICA DEL CLIENTE Y LA LÓGICA DEL SERVIDOR             //
// IMPLEMENTAN DISTINTAS INTERFACES                                 //
// ¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡¡

/*
const API_PATH: string = 'http://api.openweathermap.org/data/2.5/';
const APP_ID: string = '27dd8e99724b5e51c5dc4f98e75a9f58';
export const getCityWeatherByCoords = async (coords: CoordsType):Promise<IGetCityWeatherByCoords> => {
  const response: AxiosResponse = await axios.get(`${API_PATH}weather?lang=es&lat=${coords.lat}&lon=${coords.lon}&appid=${APP_ID}`);
  const { data } = response;
  const result: IGetCityWeatherByCoords = {
    temperature: {
      value: convertToCelsius(data.main.temp),
      pressure: data.main.pressure,
      humidity: data.main.humidity,
      min: convertToCelsius(data.main.temp_min),
      max: convertToCelsius(data.main.temp_max),
    },
    location: {
      zone: data.name,
      country: data.sys.country,
    },
    coord: {
      lon: data.coord.lat,
      lat: data.coord.lon,
    },
    weather: data.weather,
  }
  return result;
}
*/
