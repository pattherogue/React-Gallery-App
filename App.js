import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import './css/index.css';

//Components 
import Nav from './Components/Nav';
import NotFound from './Components/NotFound';
import SearchForm from './Components/SearchForm';
import PhotoContainer from './Components/PhotoContainer';

class App extends Component {
    state = {
      
        isLoading: true
    }

}