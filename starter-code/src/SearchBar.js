import React, { Component } from 'react';
import Data from './data.json';

class SearchBar extends Component {

  render() {
    return (
      <div>

<label>SearchBar: </label>
<input placeholder="Search" type="text"/><br/>
<input type="checkbox"/><label>show only available products</label>

      </div>
    );
  }
}

export default SearchBar;
