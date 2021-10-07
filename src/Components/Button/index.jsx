import React from 'react';
import './style.scss';

const Button = ({ children, cls }) => {
  return <button className={cls}>{children}</button>;
};

export default Button;
