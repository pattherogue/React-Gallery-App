import React, { Component } from 'react';
import { withRouter } from 'react-router';

class Search extends Component {
    state = {
        querySearch: ''
    }
}

onSearch = e => {
    this.setState({querySearch: e.target.value });
}