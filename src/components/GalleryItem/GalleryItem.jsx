import React, { Component } from 'react';
import './GalleryItem.css';

//material-ui imports
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';

class GalleryItem extends Component {
  render() {
    return (
      <div key={this.props.photo.id} className="GalleryItem">
        <div className="overlay" />
        <img src={this.props.photo.path} alt={this.props.photo.id} />
        <div className="details fadeIn-bottom">
          <Grid container justify="center" alignItems="center" spacing={1}>
            <Grid item xs={12}>
              <p>
                {this.props.photo.description}
                <br />({this.props.photo.date})
              </p>
            </Grid>
            <Grid item xs={12} className="likeCount">
              <FavoriteIcon
                onClick={() => {
                  this.props.addLike(this.props.photo.id);
                }}
                className="likeBtn"
              />
              <Typography variant="h5">{this.props.photo.likes}</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    );
  }
}

export default GalleryItem;
