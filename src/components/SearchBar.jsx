import { useState } from 'react';

function SearchBar(props) {
  const [filter, setFilter] = useState('');

  const filterHandler = (e) => {
    setFilter(e.target.value);
    props.productFilter(e.target.value);
  };

  return (
    <form className="search" role="search">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        placeholder="Search"
        value={filter}
        onChange={filterHandler}
      />
    </form>
  );
}

export default SearchBar;
