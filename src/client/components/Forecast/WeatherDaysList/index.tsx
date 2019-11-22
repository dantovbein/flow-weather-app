import React from 'react';
import WeatherDayItem from './WeatherDayItem';
import { Message } from '../../../constants';
import './styles.scss';

const WeatherDaysList: React.FunctionComponent<IWeatherDaysListProps> = (props: IWeatherDaysListProps) => (
  (props.days) ?
    <>
      <ul className="WeatherDaysList"> 
        <div className="WeatherDaysList__theader">
          <span>Fecha</span>
          <span>Temperatura</span>
          <span>Mínima</span>
          <span>Máxima</span>
          <span>Humedad</span>
          <span>Presión</span>
          <span>Descripción</span>
        </div>
        { props.days.map((day:WeatherPeriodType, key:number) => <WeatherDayItem key={key} day={day}/>) }
      </ul>
    </>
  : <span className="WeatherDaysList__error-message">{Message.NO_INFORMATION}</span>
)

export default WeatherDaysList;