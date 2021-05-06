// imports
import React from 'react';

// component
class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <h4> Search </h4>
        <input type="text" onChange={(event) => this.props.filterFunc(event)} />
      </div>
    );
  }
}

//export
export default SearchBar;
