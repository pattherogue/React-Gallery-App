import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import apiKey from '../config';

import Nav from './Nav';
import NotFound from './NotFound';
import Search from './Search';
import PhotoContainer from './PhotoContainer';

class App extends Component {
    state = {
        images: [];

        searchQuery: '';
        searchPhotos: [];
        isLoading: true
    }

}