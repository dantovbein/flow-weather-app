import React, {useEffect, useState} from 'react';
import { getCityForecastByCoords } from '../../api';
import Overlay from '../Overlay';
import { Message } from '../../constants';
import WeatherDaysList from './WeatherDaysList';
import './styles.scss';

const Forecast: React.FunctionComponent<IForecastProps> = (props: IForecastProps) => {
  const [forecast, setForecast] = useState<IGetCityForecastByCoords>();
  const [expand, setExpand] = useState<boolean>(false);
  useEffect(() => {
    (async function () {
      const F:IGetCityForecastByCoords = await getCityForecastByCoords({
        lat: props.coords.lat,
        lon: props.coords.lon
      });
      setForecast(F);
    })()
  }, []);
  const expandOrCollapse = () => {
    setExpand(!expand)
  }
  return (
    <div 
      className={`Forecast Forecast${expand ? '--expand' : ''}`}
      onClick={expandOrCollapse}
    >
      {(!forecast) 
        ? <Overlay message={Message.FETCHING_FORECAST_BY_COORDS}/>
        : <>
            <h1 className="Forecast__title">TEMPERATURA PARA LOS PROXIMOS 5 DÍAS</h1>
            <WeatherDaysList days={forecast.list}/>
          </>
      }
      <div className="Forecast__bottom-gradient"></div>
    </div>
  );
}

export default Forecast;
