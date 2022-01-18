import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Photo from './Photo';
import NotFound from './NotFound';
import Loading from './Loading';

class PhotoContainer extends Component {
    pictureSearch() {
        let photos = this.props.data.map( image => 
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
                    { this.pictureSearch() }
                </ul>
            </div>
        )
    }
}

export default withRouter(PhotoContainer);