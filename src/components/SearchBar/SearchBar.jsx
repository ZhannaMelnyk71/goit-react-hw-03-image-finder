import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './SearchBar.module.css';

class SearchBar extends Component {
  render() {
    const { onSubmit } = this.props;
    return (
      <header className={styles.Searchbar}>
        <form className={styles.SearchForm} onSubmit={onSubmit}>
          <button type="submit" className={styles['SearchForm-button']}>
            <span className={styles['SearchForm-button-label']}>Search</span>
          </button>

          <input
            className={styles['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            id="search"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func,
};
