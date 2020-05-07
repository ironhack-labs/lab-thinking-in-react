import React, { Component } from 'react';
import '../App.css';

class SearchBar extends Component {
    render() {
      return (
        <div>
            <form>
                <input
                type="text"
                name="name"
                id="name"
                value={this.props.searchTerm} 
                // the callback function (this.props.onSearch) recieves parameter event
                onChange={this.props.onSearch}
                placeholder='search product'
                style={{ width: '50%' }}
                >
                </input>
              </form>

              <form>
                {/* checked is an attribute in checkbox html */}
                <input 
                type="checkbox" 
                onChange={this.props.onCheckBoxChange} 
                checked={this.props.inStock} />
                <label> only show products in stock </label>
              </form>
        </div>
      );
    }
  }

  export default SearchBar;