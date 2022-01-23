import { useState, useEffect } from 'react';

const SearchBar = ({ setProductSearch, setProductInStock }) => {
  const [search, setSearch] = useState('');
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setProductSearch(search);
    setProductInStock(checked);
  }, [search, setProductSearch, checked, setProductInStock]);

  return (
    <form
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        padding: '0 0 20px',
      }}
    >
      <input
        className="input mb-5"
        type="text"
        name="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div>
        <input
          className="input mb-5"
          id="inStock"
          type="checkbox"
          name="inStock"
          value={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </form>
  );
};

export default SearchBar;
