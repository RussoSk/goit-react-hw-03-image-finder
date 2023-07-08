import React from 'react';
import PropTypes from 'prop-types';
import css from "./ImageGalleryItem.module.css";

export const ImageGalleryItem = ({ image, onOpenModal }) => {
    const { webformatURL, tags } = image;
  
    return (
      <li className={css.ImageGalleryItem} onClick={() => onOpenModal(image.largeImageURL)}>
        <img src={webformatURL} alt={tags} className={css.ImageGalleryItemImage} />
      </li>
    );
  };


  ImageGalleryItem.propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
    onOpenModal: PropTypes.func.isRequired,
  };