import React from 'react';

export default function SearchBar() {
  return (
    <div>
      <label htmlFor="search">Search </label>
      <input
        type="text"
        name="query"
        id="search"
        value={this.props.query}
        onChange={this.handlerChange}
      />
    </div>
  );
}
