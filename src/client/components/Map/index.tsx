import React from 'react';
import ReactDOM from 'react-dom';
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js';
mapboxgl.accessToken = 'pk.eyJ1IjoiZGFudG92YmVpbiIsImEiOiJjazM4NW9tY3cwNGZ5M2lucmZnZm55cGJxIn0.0JyOUCDQhYCm1biOYurdhQ';
import './styles.scss';

class Map extends React.Component<IMapProps,{}> {
  constructor(props: IMapProps, state: any) {
    super(props, state);
    this.mapContainer = React.createRef();
  }

  componentDidMount() {
    const {lat, lon, zoom} = this.props;
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lat, lon],
      zoom
    });
  }

  render() {
    return (
      <div className="Map" ref={el => this.mapContainer = el} />
    )
  }
}

export default Map;