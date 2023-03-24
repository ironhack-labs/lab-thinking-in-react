import React from 'react'

function SearchBar() {
  return (
    <div>
      <form>
        <div className="input-group filters">
          <span className="input-group-text"></span>
          <input type="text" className="form-control description-input" id="search" name="search"
            placeholder="Search"></input>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" name="stock" value="stock" />
          <label class="form-check-label" htmlFor='stock'>Only show products in stock</label>
        </div>
      </form>
    </div>
  )
};

export default SearchBar;