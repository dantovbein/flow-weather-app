/// <reference path="../../../types/index.d.ts"/>

import {Reducer, Action} from 'redux';
import { Actions } from '../../actions';

export type CitiesReducerType = {
  cities: IGetCityForecastByName[]
}

export const initialState: CitiesReducerType = {
  cities: []
}

export const citiesReducer: Reducer<CitiesReducerType> = (
  state: CitiesReducerType = initialState,
  action: Action<Actions>
): CitiesReducerType => {
  switch((action).type) {
    case Actions.ADD_CITY:
      const id = state.cities.length;
      return {
        ...state,
        cities: [
          ...state.cities, 
          {
            cod: action.city.cod,
            coord: action.city.coord,
            weather: action.city.weather,
            wind: action.city.wind,
            temperature: action.city.temperature,
            location: action.city.location,
            id
          }
        ]
      }
    case Actions.DELETE_CITY:
      debugger
      return {
        ...state,
        cities: state.cities.filter(c => c.id !== action.city.id)
      }
    default: 
      return state;
  }
};
