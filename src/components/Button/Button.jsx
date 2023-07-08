import React from 'react';
import css from './Button.module.css'
export const Button = ({ onLoadMore }) => {
    return (
      <div className={css.ButtonContainer} >
      <button className={css.Button} onClick={onLoadMore}>
        Load more
      </button>
      </div>
    );
  };


