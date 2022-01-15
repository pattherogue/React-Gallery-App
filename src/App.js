import React, { Component } from 'react';
import axios from "axios";

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
import Error from './Components/Error';


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

  performSearch = (query) => {
    this.setState({loading: true})
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1
    `).then(response => {

      if(query === 'nature') {
        this.setState({
          nature: response.data.photos.photo,
          loading: false
        })
      } else if (query === 'food') {
        this.setState({
          food: response.data.photos.photo,
          loading: false
        })
      } else if (query) {
        this.setState({
          creative: response.data.photos.photo,
          loading: false
        })
      } else {
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
      <BrowswerRouter>
        <div className='container'>
          <SearchForm onSearch={this.performSearch} />

          {
            (this.state.loading) 
            ? <p>Loading...</p> :
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/nature"/>} />
            <Route path="/nature" render={() => <PhotoContainer data={this.state.nature}/>} />
            <Route path="food" render={() => <PhotoContainer data={this.state.food}/>} />
            <Route path="creative" render={() => <PhotoContainer data={this.state.creative}/>} />
            <Route path={"/search/:query"} render= {() => <PhotoContainer data={this.state.photos} />}/>
            <Route component={ Error } />
          </Switch>
          }
        </div>
      </BrowswerRouter>
    );

  }


}

export default App;



