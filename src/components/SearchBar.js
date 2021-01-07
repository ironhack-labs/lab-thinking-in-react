import React, { Component }  from 'react';

/*export default function SearchBar(props) {
    function handleChange(event) {
        let newValue = event.target.value;
        props.searchHandler(newValue);
    }

    return (
        <div>
            <h1>Search</h1>
            <input type="text" name="query" value={ props.query } onChange={ handleChange }/>
        </div>
    );
}*/

class SearchBar extends Component {
    render() {
        return (
            <div>
                <label htmlFor="search">Search</label>
                <input onChange={this.props.handleSearch} id="search" placeholder="Search..." type="text"/>
                <label htmlFor="stocked">Search</label>
                <input onChange={handleStocked} id="stocked" type="checkbox"/>
            </div>
        )
    }
}

export default SearchBar