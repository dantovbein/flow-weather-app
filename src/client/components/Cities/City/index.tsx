import React, { FormEvent } from 'react';
import { useDispatch } from 'react-redux';
import Overlay from '../../Overlay';
import { Actions } from '../../../actions';
import { DeleteCityActionType } from '../../../../types';
import { Message } from '../../../constants';
import LocationWeather from '../../Location/LocationWeather';
import Forecast from '../../Forecast';
import './styles.scss';
import XButton from '../../XButton';

const City: React.FunctionComponent<ICityProps> = (props: ICityProps) => {
  const { city } = props;
  const dispatch = useDispatch();
  const deleteCity = (): void => {
    const city: CityType = {
      id: props.city.id
    };
    const payload: DeleteCityActionType = {
      type: Actions.DELETE_CITY,
      city
    };
    dispatch(payload);
  };
  return (
    <div className="City">
      {
        !city ? <Overlay message={Message.FETCHING_CITY_DATA}/> : (
          <div className="City__wrapper">
            <LocationWeather city={city} initialZoom={11}/>
            <Forecast coords={city.coord!}/>
            <XButton onClickHandler={deleteCity}/>
          </div>
        )
      }
    </div>
  )
}

export default City;