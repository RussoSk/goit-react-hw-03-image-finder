
import React from 'react';
import { BeatLoader} from 'react-spinners';
import css from './Loader.module.css'

export const CustomLoader = () => {
  return (
    <div className={css.Loader}>
      <BeatLoader color="blue" size={280} />
    </div>
  );
};

export default CustomLoader;
