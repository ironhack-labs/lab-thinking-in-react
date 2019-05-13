import React, { useState, useEffect, useContext } from 'react';

import Context from '../context';

const SearchBar = () => {
  const { dispatch } = useContext(Context);
  const [query, setQuery] = useState('');
  const [stocked, setStocked] = useState(false);

  useEffect(() => {
    dispatch({
      type: 'FILTER_PRODUCTS',
      payload: {
        query,
        stocked
      }
    });
  }, [query, stocked]);

  return (
    <section className="has-text-centered">
      <label className="field">
        <p className="label">Search</p>
        <input
          type="text"
          value={query}
          onChange={({ target }) => setQuery(target.value)}
          className="input"
        />
      </label>
      <label className="checkbox">
        <input
          type="checkbox"
          value={stocked}
          onChange={({ target }) => setStocked(target.checked)}
        />
        Only show products on stock
      </label>
    </section>
  );
};

export default SearchBar;
