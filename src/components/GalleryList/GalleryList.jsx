import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
  render() {
    //for every photo in gallery, an item is rendered
    //see GalleryItem component for details
    let gallery = this.props.gallery.map(photo => {
      return (
        <GalleryItem
          key={photo.id}
          photo={photo}
          addLike={this.props.addLike}
        />
      );
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
