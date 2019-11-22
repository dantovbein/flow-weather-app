
type LocationType = {
  zone?: string,
  city?: string,
  country?: string,
}

type CoordsType = {
  lat: number,
  lon: number,
}

type WeatherType = {
  description: string,
  icon?: string,
  id?: number,
  main?: string,
}

type WeatherPeriodType = {
  temperature: TemperatureType,
  weather: WeatherType,
  wind?: WindType,
  dt?: number,
  dt_txt?: string,
}

type TemperatureType = {
  value: number,
  pressure: number,
  humidity: number,
  min: number,
  max: number,
  seaLevel?: number, 
}

type WindType = {
  speed: number
}

interface IGetCityResponse {
  cod?: number | string,
  weather?: WeatherType[],
  location?: LocationType,
  coord?: CoordsType,
  wind?: WindType,
  temperature?: TemperatureType,
}

interface IGetCityWeatherByCoords extends IGetCityResponse {}

interface IGetCityForecastByName extends IGetCityResponse {}

interface IGetCityForecastByCoords extends IGetCityResponse {
  list: WeatherPeriodType[]
}

type IGetCity = IGetCityWeatherByCoords & IGetCityForecastByCoords & IGetCityForecastByName

interface IAPIResponse {
  error?: any,
  data: IGetCityWeatherByCoords | IGetCityForecastByCoords | IGetCityForecastByName | string
}