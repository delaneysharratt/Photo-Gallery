import React, { Component } from 'react';
import './GalleryItem.css';

//material-ui imports
import FavoriteIcon from '@material-ui/icons/Favorite';

class GalleryItem extends Component {
  render() {
    return (
      <div key={this.props.photo.id} className="GalleryItem">
        <div className="overlay" />
        <img src={this.props.photo.path} alt={this.props.photo.id} />
        <div className="details fadeIn-bottom">
          <p>
            {this.props.photo.description}
            <br />({this.props.photo.date})
          </p>
          <h3>
            <span
              onClick={() => {
                this.props.addLike(this.props.photo.id);
              }}
              className="likeBtn"
            >
              <FavoriteIcon />
            </span>
            {this.props.photo.likes}
          </h3>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
