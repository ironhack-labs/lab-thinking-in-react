import React from 'react';

export const SearchBar = (props) =>  {
  console.log(props.products)
  
    return (
      <form>
        <input type="text" onChange={(event) => props.products.search(event)} placeholder="Search..." />
        
        <p>
          <input type="checkbox" />
          {' '}
          Only show products in stock
        </p>
      </form>
    );
  
}

export default SearchBar;


