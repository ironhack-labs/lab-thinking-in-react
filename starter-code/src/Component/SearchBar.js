import React from 'react';

const SearchBar = ({search,elementSearch})=>(
  <div>

    <nav>
      <div className="nav-wrapper">
        <form>
          <div className="input-field">
            <input
              name="barsearch"
              id="search"
              type="search"
              onChange={search}
            />
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
          </div>
        </form>
      </div>
    </nav>
  </div>
);

export default SearchBar;