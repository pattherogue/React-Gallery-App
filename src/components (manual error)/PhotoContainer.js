import React, { Component } from '../../search-app/node_modules/react';
import { withRouter } from 'react-router-dom';
import Photo from '.Photo';

class PhotoContainer extends Component {
    pictureSearch() {
        let photos = this.props.imageData.map( image => 
            <Photo 
                url={`https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}_w.jpg`} 
                key={image.id} 
                alt={image.title}
            />
        );

        return photos;
    }

    render() {
        return (
            <div className="photo-container">
                <h2>Results</h2>
                <ul>
                    { this.searchPictures() }
                </ul>
            </div>
        )
    }
}

export default withRouter(PhotoContainer);