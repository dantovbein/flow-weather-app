interface ILocationWeatherProps {
  city?: IGetCityForecastByName | IGetCityWeatherByCoords,
  initialZoom?: number,
}