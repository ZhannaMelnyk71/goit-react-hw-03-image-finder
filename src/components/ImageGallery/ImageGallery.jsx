import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

import styles from './ImageGallery.module.css';

class ImageGallery extends Component {
  render() {
    const { photoList } = this.props;
    return (
      <ul className={styles.ImageGallery}>
        {photoList.map(({ webformatURL, tags, largeImageURL }, index) => (
          <ImageGalleryItem
            key={index}
            url={webformatURL}
            alt={tags}
            largeImageURL={largeImageURL}
          ></ImageGalleryItem>
        ))}
      </ul>
    );
  }
}

export default ImageGallery;

ImageGallery.propTypes = {
  photoList: PropTypes.arrayOf(
    PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ),
};
