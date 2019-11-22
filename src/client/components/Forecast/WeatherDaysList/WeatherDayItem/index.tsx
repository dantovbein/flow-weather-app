import React from 'react';
import './styles.scss';

const WeatherDayItem: React.FunctionComponent<IWeatherDayItemProps> = (props: IWeatherDayItemProps) => {
  const {day} = props;
  return (
    <div className="WeatherDayItem">
      <span>{day.dt_txt}</span>
      <span>{day.temperature.value}°</span>
      <span>{day.temperature.min} °</span>
      <span>{day.temperature.max} °</span>
      <span>{day.temperature.humidity} %</span>
      <span>{day.temperature.pressure} hPa</span>
      <span>{day.weather.description}</span>
    </div>
  )
}

export default WeatherDayItem;
