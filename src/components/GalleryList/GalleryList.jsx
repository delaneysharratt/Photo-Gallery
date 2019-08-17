import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    let gallery = this.props.gallery.map(photo => {
      return <GalleryItem photo={photo} />;
    });

    return (
      <div className="GalleryDisplay">
        {/* <h2>Memories:</h2> */}
        {gallery}
      </div>
    );
  }
}

export default GalleryList;
