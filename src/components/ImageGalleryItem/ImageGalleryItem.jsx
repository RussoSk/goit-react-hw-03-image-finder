import React from 'react';
import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ image, onOpenModal }) => {
    const { webformatURL, tags } = image;
  
    return (
      <li className={css.ImageGalleryItem} onClick={() => onOpenModal(image.largeImageURL)}>
        <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} />
      </li>
    );
  };


