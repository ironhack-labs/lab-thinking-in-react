import React from 'react';

export default function ProductRow({ name, price, searchQuery }) {
  const styledName = () => {
    const lengthOfSearch = searchQuery.length;
    const indexOfSearch = name.toLowerCase().indexOf(searchQuery.toLowerCase());

    return (
      <div>
        {name.slice(0, indexOfSearch)}
        <span style={{ backgroundColor: 'yellow' }}>
          {name.slice(indexOfSearch, indexOfSearch + lengthOfSearch)}
        </span>
        {name.slice(indexOfSearch + lengthOfSearch)}
      </div>
    );
  };

  return (
    <tr>
      <td>{styledName()}</td>
      <td>{price}</td>
    </tr>
  );
}
