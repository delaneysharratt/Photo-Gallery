import React, { Component } from 'react';
import GalleryItem from '../GalleryItem/GalleryItem';

class GalleryList extends Component {
    render() {
        return (
            <div className="GalleryDisplay">
                <h2>Memories:</h2>
                <GalleryItem/>
            </div>
        );
    }
}

export default GalleryList;