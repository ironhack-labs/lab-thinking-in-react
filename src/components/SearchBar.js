import React from 'react';

export default class SearchBar extends React.Component {
  render() {
    return (
      <div>
        <h3>Search</h3>
        <form>
          <input type="text" name="search"></input>
        </form>
      </div>
    );
  }
}
