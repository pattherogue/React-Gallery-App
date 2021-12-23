import './css/index.css';
import SearchForm from './components/SearchForm';
import Nav from './omponents/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import apiKey from '../config';

import Nav from './Nav';
import NotFound from './NotFound';
import Search from './SearchForm';
import PhotoContainer from './PhotoContainer';

class App extends Component {
    state = {
        images: [];

        searchQuery: '';
        searchPhotos: [];
        isLoading: true
    }

}