import React from 'react';

class Searchbar extends React.Component {
  render() {
    return (
      <input
        onChange={this.props.passedSearchValue}
        style={{ width: '100%' }}
        type="text"
        name="product"
        placeholder="Search your product here"
      ></input>
    );
  }
}

export default Searchbar;
