import React from 'react';

const SearchBar = ({ showSearch, isChecked, setIsChecked }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleOnChange = (e) => {
    let { name, value } = e.target;
    if (name === 'search') {
      name = value;
      showSearch(name);
    } else if (name === 'inStock') {
      name = value;
      setIsChecked(name);
    }
  };

  return (
    <section className="SearchBar">
      <form onSubmit={handleSubmit}>
        <div className="SearchBar_search__wrapper">
          <label htmlFor="search">
            Search
            <input
              onChange={handleOnChange}
              name="search"
              id="search"
              type="text"
            />
          </label>
        </div>
        <div className="SearchBar_in_stock__wrapper">
          <label htmlFor="in_stock">
            <input
              onChange={handleOnChange}
              name="inStock"
              id="in_stock"
              type="checkbox"
              checked={isChecked}
            />
            Only show products in stock
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};
 
export default SearchBar;

