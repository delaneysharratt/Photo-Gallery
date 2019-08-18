import React, { Component } from 'react';
import './GalleryItem.css';

class GalleryItem extends Component {
  render() {
    return (
      <div key={this.props.photo.id} className="GalleryItem">
        <div className="overlay" />
        <img src={this.props.photo.path} alt={this.props.photo.id} />
        <div className="details fadeIn-bottom">
          <p>{this.props.photo.description}</p>
          <h3>
            <span
              onClick={() => {
                this.props.addLike(this.props.photo.id);
              }}
              className="likeBtn"
            >
              &hearts;
            </span>{' '}
            {this.props.photo.likes}
          </h3>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
