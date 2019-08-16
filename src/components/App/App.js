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
          gallery: {
            id: response.data.id,
            path: response.data.name,
            description: response.data.description,
            likes: 0
          }
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
          <h1 className="App-title">A Little Gallery</h1>
        </header>
        <br/>
        <GalleryList />
      </div>
    );
  }
}

export default App;
