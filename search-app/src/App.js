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
    axios.get('https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1')
  }
  
  render () {
    return (
      <BrowswerRouter>
      
      </BrowswerRouter>
    )
  }


}

export default App;
