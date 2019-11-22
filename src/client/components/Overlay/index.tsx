import React from 'react';
import Spinner from '../Spinner';
import './styles.scss';



const Overlay: React.FunctionComponent<IOverlayProps> = (props: IOverlayProps) => (
  <div className="Overlay">
    <div className="Overlay__wrapper">
      <Spinner/>
      { props.message && <span className="Overlay__message">{props.message}</span> }
    </div>
  </div>
)

export default Overlay;