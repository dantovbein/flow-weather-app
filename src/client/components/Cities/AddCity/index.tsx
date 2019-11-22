import React, {MouseEvent, FormEvent, useState} from 'react';
import { useDispatch } from 'react-redux';
import './styles.scss';
import { Actions } from '../../../actions';
import { Message } from '../../../constants';
import { getCityForecastByName } from '../../../api';
import { AddNewCityActionType } from '../../../../types';

const AddewCity: React.FunctionComponent<IAddCityProps>= (props: IAddCityProps) => {

  const [cityName, setCityName] = useState('');
  const dispatch = useDispatch();

  const onChangeInput = (e: FormEvent<HTMLInputElement>) => {
    setCityName(e.currentTarget.value);
  }

  const addCity = async (e: MouseEvent<HTMLButtonElement>) => {
    if(cityName === '') return
    dispatch({type: Actions.FETCHING});
    const city:IGetCityForecastByName = await getCityForecastByName(cityName);
    const payload: AddNewCityActionType = {
      type: Actions.ADD_CITY,
      city
    }
    dispatch({type: Actions.FETCHED});
    dispatch(payload);
    setCityName('');
  };
  
  return (
    <div className="AddCity">
      <div className="AddCity__wrapper">
        <input 
          className="AddCity__input-search"
          type="text"
          value={cityName}
          placeholder="Agregar nueva ciudad"
          onChange={onChangeInput}
        />
        <button 
          className="AddCity__add-button"
          onClick={addCity}
          disabled={!props.allowAdd || (cityName === '')}
        >Agregar</button>
      </div>
      {
        (!props.allowAdd) && <span className="AddCity__error-message">{Message.MAX_ALLOWED_CITIES}</span>
      }
    </div>
  )
}

export default AddewCity;