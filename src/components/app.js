import './css/index.css';
import SearchForm from './components/SearchForm';
import Nav from './omponents/Nav';
import PhotoContainer from './components/PhotoContainer';
import NotFound from './components/NotFound';

/* Nav data */
import ApiKey from './config';

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

//Components 
import Nav from './Nav';
import NotFound from './NotFound';
import SearchForm from './SearchForm';
import PhotoContainer from './PhotoContainer';

class App extends Component {
    state = {
      
        isLoading: true
    }

}