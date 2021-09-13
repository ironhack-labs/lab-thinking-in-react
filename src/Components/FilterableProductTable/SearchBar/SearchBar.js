import React from 'react';
import './SerachBar.css'

const SearchBar = ({ keyword, setKeyword }) => {

  const Checkbox = props => (
    <input type="checkbox" {...props} />
  )
  
  return (

    <div className='searchBar'>
    <h3>Search</h3>
    <input className='bar'
         key="random1"
      value={keyword}
      placeholder={'Search Product'}
      onChange={(e) => setKeyword(e.target.value)}
    />
    <div>
            <label>
          <Checkbox  />
          <p>Only show products on stock</p>
        </label>

        </div>
    
    </div>
  );
};

export default SearchBar;
