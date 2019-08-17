import React, { Component } from 'react';

class GalleryItem extends Component {
  render() {
    return (
      <div key={this.props.photo.id} className="GalleryItem">
        <img src={this.props.photo.path} alt={this.props.photo.id}/>
        <p>{this.props.photo.description}</p>
            <p>&hearts; {this.props.photo.likes}</p> 
      </div>
    );
  }
}

export default GalleryItem;
