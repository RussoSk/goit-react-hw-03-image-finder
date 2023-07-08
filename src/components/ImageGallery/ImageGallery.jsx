import React from 'react';
import PropTypes from 'prop-types';
import {ImageGalleryItem} from '../ImageGalleryItem/ImageGalleryItem' 
import css from './ImageGallery.module.css'

export const ImageGallery = ({ images, onOpenModal }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map((image) => (
        <ImageGalleryItem key={image.id} image={image} onOpenModal={onOpenModal} />
      ))}
    </ul>
  );
};

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
  onOpenModal: PropTypes.func.isRequired,
};


