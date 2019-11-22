import React from 'react';
import Map from '../../Map';
import './styles.scss';

const LocationWeather: React.FunctionComponent<ILocationWeatherProps> = (props: ILocationWeatherProps) => {
  const {city, initialZoom} = props;
  return(
    <div className="LocationWeather">
      <div className="LocationWeather__data">
        <h1>{`${city.location!.zone}, ${city.location!.country}`}</h1>
        <p className="LocationWeather__text">Latitude: {city.coord!.lat}</p>
        <p className="LocationWeather__text">longitude: {city.coord!.lon}</p>
        <div className="LocationWeather__temperature">
          <h2>{city.weather![0].description}</h2>
          <span>Temperatura: {city.temperature!.value}°</span>
          <span>Mínima: {city.temperature!.min}°</span>
          <span>Máxima: {city.temperature!.max}°</span>
          <span>Humedad: {city.temperature!.humidity} %</span>
          <span>Presión: {city.temperature!.pressure} hPa</span>
        </div>
      </div>  
      <div className="LocationWeather__map">
        {<Map lon={city.coord!.lon} lat={city.coord!.lat} zoom={initialZoom}/>}
      </div>  
    </div>
  )
}

export default LocationWeather;