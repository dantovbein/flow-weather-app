import { Actions } from "../client/actions"

interface IMainStore {
  appStore: AppReducerType,
  citiesStore?: ICitiesStore
}

interface ICitiesStore {
  cities: CityType[]
}

type CityWeatherType = {
  day: Date,
  temperature: string,
}

type AddNewCityActionType = {
  type: typeof Actions.ADD_CITY,
  city: CityType | IGetCityForecastByName
}

type DeleteCityActionType = {
  type: typeof Actions.DELETE_CITY,
  city: CityType
}