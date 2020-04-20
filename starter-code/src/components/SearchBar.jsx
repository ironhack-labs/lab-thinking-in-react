import React, { Component } from 'react';

class SearchBar extends Component {
    render() {
        return (
            <div>
                <label htmlFor="buscador">Search</label>
                <input id="buscador" type="text" onChange={this.props.filter}/>
                <br/>
                <input type="checkbox" id="onlyOnStock" />
                <label htmlFor="onlyOnStock">Only show products on stock</label>
            </div>
        );
    }
}

export default SearchBar