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

handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.query.value)
    this.props.history.push(`/search/$(this.query.value})`)
    e.currentTarget.reset()
}