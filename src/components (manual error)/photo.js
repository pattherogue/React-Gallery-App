import React from '../../search-app/node_modules/react';

const Photo = props => {
    return (
        <li>
            <img src={props.url} alt={props.title}/>
        </li>
    )
};

export default Photo;