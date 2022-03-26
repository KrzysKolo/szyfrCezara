import React from 'react';
import './button.scss';

const Button = ({onClick, title}) => {
  return (
    <div>
      <button onClick={onClick}>{title}</button>
    </div>
  )
}

export default Button