import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Modal from 'components/Modal/Modal';
import styles from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = {
    showModal: false,
  };
  closeModal = () => {
    this.setState({ showModal: false });
  };
  openModal = e => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  render() {
    const { url, alt, largeImageURL } = this.props;
    return (
      <li className={styles['ImageGalleryItem']}>
        <div className={styles['gallery__link']} onClick={this.openModal}>
          <img
            className={styles['ImageGalleryItem-image']}
            src={url}
            alt={alt}
          />
        </div>
        {this.state.showModal && (
          <Modal
            src={largeImageURL}
            alt={alt}
            onClose={this.closeModal}
          ></Modal>
        )}
      </li>
    );
  }
}

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  url: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
