import React from 'react';
import City from './City';
import { Message } from '../../constants';
import AddewCity from './AddCity';
import './styles.scss';

export class Cities extends React.Component<ICitiesProps, ICitiesState> {
  
  constructor(props: ICitiesProps, state: ICitiesState) {
    super(props, state);
  }
  
  render() {
    // @ts-ignore 
    const {citiesStore: {cities}} = this.props;
    console.log(cities)
    return (
      <div className="Cities">
        <AddewCity allowAdd={(cities.length < 5)}/>
        <h1 className="Cities__title">LISTA DE CIUDADES</h1>
        {
          (cities.length === 0)
            ? <span className="Cities__error-message">{ Message.EMPTY_CITIES}</span>
            : <ul>{ cities.map(
                (city: CityType, key: number) => <City key={key} city={city}/>) }
              </ul>
        }
      </div>
    )
  }
}
