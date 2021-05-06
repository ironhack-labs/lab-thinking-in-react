import React from 'react';


class SearchBar extends React.Component {


  render() {
    return (
      <div className="SearchBar">
      <h3>Search</h3>
        <input onChange={(event)=> this.props.filterProducts(event)} type="text" placeholder="Search..." />
      </div>
        
    );
  }
}

export default SearchBar;
