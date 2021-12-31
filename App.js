import './css/index.css';


/* Nav data */
import ApiKey from './config';

import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

//Components 
import Nav from './src/components/Nav';
import NotFound from './src/components/NotFound';
import SearchForm from './src/components/SearchForm';
import PhotoContainer from './src/components/PhotoContainer';

class App extends Component {
    state = {
      
        isLoading: true
    }

}