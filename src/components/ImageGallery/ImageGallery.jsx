import React from 'react';
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




