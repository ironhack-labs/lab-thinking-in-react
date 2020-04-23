import React, { Component } from 'react';

class SearchBar extends Component {
    state = {
        searchBarProduct : "",
    }
    handleOnChange = (e) => {
        const {searchProduct} = this.props;
        console.log(e.target.value)
        searchProduct(e.target.value)
    
    }
    render(){
        return(
            <div>
                <label>Search</label>
                
                <input type="text" className="search-bar" onChange={this.handleOnChange}></input>
            </div>
        )
    }
}

export default SearchBar;