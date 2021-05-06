import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="SearchBar">
        <label htmlFor="search">Search</label>
        <input type="text" placeholder="enter search" name="search" />

        <input type="checkbox" name="instockonly" id="instockonly" />
        <label htmlFor="instockonly">Only show products on stock</label>
      </div>
    );
  }
}

export default App;
