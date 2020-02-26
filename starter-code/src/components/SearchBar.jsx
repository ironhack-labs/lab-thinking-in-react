import React, {Component} from 'react';

class SearchBar extends Component {
    render(){
        return (
            <div className="SeachBar">
                <h2>Search</h2>
                <input type="text" plachelder="Item to Search"/><br/>
                <input type="checkbox"/>
                <label> Only show products on stock</label><br/>
            </div>

        )
    }
}

export default SearchBar