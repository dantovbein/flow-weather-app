import React from 'react';
import './styles.scss';

const XButton: React.FunctionComponent<IXButtonProps> = (props:IXButtonProps,{}) => (
  <div className="XButton" onClick={() => props.onClickHandler()}>X</div>
)

export default XButton;