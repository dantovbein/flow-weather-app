import {Reducer, Action} from 'redux';
import { Actions } from '../../actions';

const initialState: AppReducerType = {
  fetching: false,
  fetched: false,
}

export const appReducer: Reducer<AppReducerType> = (
  state: AppReducerType = initialState,
  action: Action<Actions>
): AppReducerType => {
  switch((action).type) {
    case Actions.FETCHING:
      return {
        fetching: true,
        fetched: false,
      }
    case Actions.FETCHED:
      return {
        fetching: false,
        fetched: true,
      }
    default: 
      return state;
  }
};
