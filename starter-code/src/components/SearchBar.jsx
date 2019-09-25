import React from 'react';

export default props => (
  <div>
    <label>Search</label>
    <input
      type="text"
      value={props.query}
      onChange={event => props.performSearch(event.target.value)}
    />
  </div>
);
