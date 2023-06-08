import React, { Component } from 'react';

import Loader from './Loader/Loader';
import { fetchPhoto } from './FetchPictures';

import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

import styles from './App.module.css';

class App extends Component {
  state = {
    photos: [],
    filter: '',
    numberPage: 1,
    loading: false,
  };

  componentDidUpdate = async (prevProps, prevState) => {
    if (
      prevState.filter !== this.state.filter ||
      prevState.numberPage !== this.state.numberPage
    ) {
      try {
        this.setState({ loading: true });
        const itemPicture = await fetchPhoto(
          this.state.numberPage,
          this.state.filter
        );

        const arrayPictures = [...itemPicture.data.hits];
        // console.log(itemPicture.data.hits.length)
        if (prevState.filter !== this.state.filter) {
          this.setState({ photos: arrayPictures });
        } else {
          const newArray = [...this.state.photos, ...arrayPictures];
          this.setState({ photos: newArray });
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  };

  
  onAddMore = () => {
    this.setState(prevState => ({ loading: true, numberPage: prevState.numberPage + 1 }));
    // this.setState({ numberPage: this.state.numberPage + 1 });
  };

  onSubmit = e => {
    e.preventDefault();
    const wordForSearch = e.target.elements.search.value.trim();
    if (wordForSearch) {
      this.setState({ filter: wordForSearch, numberPage: 1});
    }
  };

  render() {
    const { photos, loading } = this.state;
    console.log()
    return (
      <div className={styles.App}>
        <SearchBar onSubmit={this.onSubmit}></SearchBar>
        {loading && <Loader></Loader>}
        {!loading && <ImageGallery photoList={photos}></ImageGallery>}
        {photos.length !== 0 && !loading && (
          <Button onClick={this.onAddMore}></Button>
        )}
      </div>
    );
  }
}
export default App;
