import React from 'react';

import Button from '../Button';
import './style.scss';

const Typecar = ({ img, title, description, btn, cls }) => {
  return (
    <div className={cls}>
      <a href="#" className="typebook__signature">
        <img src={img} alt="Trulli" />
      </a>
      <article className="typebook__main">
        <h5 className="typebook__title">
          <a href="#">{title}</a>
        </h5>
        <p className="typebook__description">{description}</p>
        <Button cls="btn btn--yellow">{btn}</Button>
      </article>
    </div>
  );
};

export default Typecar;
