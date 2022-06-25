import { useState } from 'react';

const SearchBar = ({ findProducts }) => {
  const [search, setSearch] = useState({
    query: ``,
    showInStock: false
  });

  const { query, showInStock } = search;

  return (
    <form>
      <label htmlFor='query'>Search</label>
      <input
        value={query}
        type='text'
        name='query'
        onChange={e => {
          const newSearch = { ...search, query: e.target.value };
          setSearch(newSearch);

          findProducts(newSearch);
        }}
      />

      <input
        value={showInStock}
        type='checkbox'
        name='showInStock'
        onChange={e => {
          const newSearch = { ...search, showInStock: e.target.checked };
          setSearch(newSearch);

          findProducts(newSearch);
        }}
      />
      <label htmlFor='showInStock'>Only show products in stock</label>
    </form>
  );
}

export default SearchBar;