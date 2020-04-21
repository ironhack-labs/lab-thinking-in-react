import React from 'react';
import './SearchBar.css';

const SearchBar = (props) => {
  return (
    <div>
      <form method="get" action="">
        <div className="tb">
          <div className="td">
            <input type="text" placeholder="Search" required />{' '}
          </div>
          <div className="td" id="s-cover">
            <button type="submit">
              <div id="s-circle"></div>
              <span></span>
            </button>
          </div>
        </div>
        <div>
          <input type="checkbox" id="onStock" name="onStock" value="onStock" />
          <label for="onStock">Only show products on Stock</label>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
