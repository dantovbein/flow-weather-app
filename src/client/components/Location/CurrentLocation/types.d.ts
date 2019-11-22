interface ICurrentLocationProps {
  onGetCityWeatherByCoords?: (coords: CoordsType) => () => void
}

interface ICurrentLocationState {
  checkedGeolocation: boolean,
  errorMessage?: string,
  cityWeather: IGetCityWeatherByCoords | null,
}
