
import React, { Component } from 'react';
import SearchBar from './SearchBar'

import data from '../data.json'

class Filter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: data.data
        }

    }
    render() {
        return (
            <div>
                <h1>IronStore</h1>
                {console.log(this.state.products)}
                <SearchBar product={this.state.products}/>
            </div>
        )
    }
}

export default Filter