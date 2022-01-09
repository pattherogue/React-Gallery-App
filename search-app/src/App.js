import logo from './logo.svg';
import React, { Component } from 'react';
import { 
  BrowswerRouter, 
  Route, 
  Switch , 
  Redirect 
} from 'react-router-dom';
import './App.css';
import apiKey from './config';

//Components
import Nav from './Components/Nav';
import PhotoContainer from './Components/PhotoContainer';
import SearchForm from './Components/SearchForm';
import NotFound from './Components/NotFound';

import axios from "axios";

class App extends Component {
  
  state = {
    nature: [],
    food: [],
    creative: [],
    query: '',
    loading: true
  }

  componentDidMount () {
    this.performSearch('nature');
    this.performSearch('food');
    this.performSearch('creative');
    this.setState({
      loading: true
    });
  }

  searchAction = (query) => {
    this.setState({loading: true})
    axios.get('').then(response => {

      if(query === 'nature') {
        this.setState({
          nature: response.data.photos.photo,
          loading: false
        })
      }
    })
  }
  
  render () {
    return (
      <BrowswerRouter>
      
      </BrowswerRouter>
    )
  }


}

export default App;
