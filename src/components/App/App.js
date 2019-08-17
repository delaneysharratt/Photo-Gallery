import React, { Component } from 'react';
import axios from 'axios';
import GalleryList from '../GalleryList/GalleryList';
import './App.css';

class App extends Component {

state = {
  gallery: []
}

  componentDidMount() {
    console.log('App is loaded!');
    this.getGallery();
  }

  getGallery = event => {
    axios
      .get(
        '/gallery'
      )
      .then(response => {
        console.log('GET details', response.data);
        this.setState({
          gallery: response.data
        });
        console.log('Gallery:', this.state.gallery);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">These Little Moments</h1>
        </header>
        <GalleryList gallery={this.state.gallery} />
      </div>
    );
  }
}

export default App;
