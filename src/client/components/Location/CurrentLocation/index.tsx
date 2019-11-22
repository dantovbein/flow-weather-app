import React from 'react';
import { getCityWeatherByCoords } from '../../../api';
import { Message } from '../../../constants';
import Forecast from '../../Forecast';
import Overlay from '../../Overlay';
import LocationWeather from '../LocationWeather';
import './styles.scss';

export default class CurrentLocation extends React.Component<ICurrentLocationProps, ICurrentLocationState> {
  
  constructor(props: ICurrentLocationProps, state: ICurrentLocationState) {
    super(props, state);
    this.state = {
      checkedGeolocation: false,
      cityWeather: null,
    }
  }

  componentDidMount() {
    this.getCurrentPosition();
  }

  getCurrentPosition(): void {
    if(('geolocation' in navigator)) {
      navigator.geolocation.getCurrentPosition(async (position: Position) => {
        const response:IAPIResponse = await getCityWeatherByCoords({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        });
        this.setState({
          cityWeather: response.data as IGetCityWeatherByCoords,
          checkedGeolocation: true,
        });
      });
    } else {
      this.setState({
        checkedGeolocation: true
      });
    }
  }
  
  render() {
    const {checkedGeolocation, cityWeather} = this.state;
    return (
      <div className="CurrentLocation">
        {
          cityWeather ? (
            <>
              <div>
                <LocationWeather city={cityWeather} initialZoom={14}/>
              </div>
              <Forecast coords={cityWeather.coord!}/>
            </>
          ) : <Overlay message={Message.FETCHING_WEATHER_BY_COORDS}/>
        }
        { 
          (!cityWeather && checkedGeolocation) && (
            <span className="CurrentLocation__error-message">{Message.UNSUPPORTED_GEOLOCATION}</span>
          )
        }
      </div>
    )
  }
}