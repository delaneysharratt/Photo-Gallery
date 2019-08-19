import React, { Component } from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import GalleryList from '../GalleryList/GalleryList';
import './bootstrap.css';
import './App.css';

class App extends Component {
  state = {
    gallery: []
  };

  componentDidMount() {
    console.log('App is loaded!');
    this.getGallery();
  }

  //collects gallery data to be rendered on page
  //called on page load and after PUT request is run
  getGallery = event => {
    axios
      .get('/gallery')
      .then(response => {
        this.setState({
          gallery: response.data
        });
        console.log('Gallery:', this.state.gallery);
      })
      .catch(error => {
        console.log(error);
      });
  };

  //called to add +1 to the current 'likes' on a gallery item
  addLike = id => {
    axios
      .put(`/gallery/like/${id}`)
      .then(response => {
        console.log('Photo liked!');
        this.getGallery();
      })
      .catch(error => {
        console.log(error);
      });
  };

  //rendering app to DOM
  render() {
    return (
      <div className="App">
        <Header />
        <GalleryList gallery={this.state.gallery} addLike={this.addLike} />
      </div>
    );
  }
}

export default App;
