import React, { Component } from 'react';
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
}