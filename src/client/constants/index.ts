
export enum Message {
  UNSUPPORTED_GEOLOCATION = 'El navegador no soporta Geolocation',
  NO_CONNECTION = 'Sin conexión a internet',
  MAX_ALLOWED_CITIES = 'Solo se pueden agregar 5 ciudades',
  EMPTY_CITIES = 'No hay ciudades agregadas',
  FETCHING_WEATHER_BY_COORDS = 'Obteniendo el clima según coordenadas',
  FETCHING_FORECAST_BY_COORDS = 'Obteniendo el clima de los próximos 5 días',
  FETCHING_CITY_DATA = 'Obteniendo información de la ciudad',
  NO_INFORMATION = 'No existe información para esta ciudad',
}