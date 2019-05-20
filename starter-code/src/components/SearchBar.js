import React from "react";

const SearchBar = () => (
  <div>
    <nav className="uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <div className="uk-navbar-item">
          <form className="uk-search uk-search-navbar">
            <span uk-search-icon="true" />
            <input
              className="uk-search-input"
              type="search"
              placeholder="Search..."
            />
          </form>
        </div>
      </div>
    </nav>
    <div className="checkbox">
      <input type="checkbox" />
      <p>Only Show Products on stock</p>
    </div>
  </div>
);

export default SearchBar;
