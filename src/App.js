import React, { Component } from 'react';
import axios from "axios";

import { 
  BrowserRouter, 
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
import Error from './Components/Error';
import Loading from './Components/Loading';


class App extends Component {
  
  state = {
    displayPhotos: [],
    nature: [],
    food: [],
    creative: [],
    photos: [],
    query: '',
    loading: true,
    title: ''
  }

  componentDidMount () {
    this.performSearch('nature');
    this.performSearch('food');
    this.performSearch('creative');
    this.setState({
      loading: true
    });
  }

  performSearch = (query) => {
    this.setState({loading: true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
    `).then(response => {

      if(query === 'nature') 
        this.setState({
          nature: response.data.photos.photo,
          loading: false
        })
        else if (query === 'food') 
        this.setState({
          food: response.data.photos.photo,
          loading: false
        })
        else if (query === 'creative')
        this.setState({
          creative: response.data.photos.photo,
          loading: false
        })
        else if (query === 'cars')
        this.setState({
          displayPhotos: responmse.data.photos.photo,
          loading: false
        })
        else {
        this.setState({
          photos: response.data.photos.photo,
          title: query,
          loading: false
        })
      }
    })
    .catch(error => {
      console.log('Fetching data error', error);
      }
    );
  }
  
  render () {
    return (
      <BrowserRouter>
        <div className='container'>
          <SearchForm onSearch={this.performSearch} />
          <Nav />
          {
            (this.state.loading) 
            ? <Loading /> :
          <Switch>
            <Route exact path="/" render={() => <PhotoContainer to="/nature"/>} />
            <Route exact="/nature" render={() => <PhotoContainer data={this.state.nature}/>} />
            <Route exact="food" render={() => <PhotoContainer data={this.state.food}/>} />
            <Route exact="creative" render={() => <PhotoContainer data={this.state.creative}/>} />
            <Route path={"/search/:query"} render= {() => <PhotoContainer data={this.state.photos} />}/>
            <Route render={() =>  <Error />} />
          </Switch>
          }
        </div>
      </BrowserRouter>
    );

  }


}

export default App;



