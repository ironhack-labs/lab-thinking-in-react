import { useState } from 'react';

export default function SearchBar({ filterProducts }) {
  const [search, setSearch] = useState('');
  const handleChange = (event) => {
    const inputValue = event.target.value;
    setSearch(inputValue);
    filterProducts(inputValue);
  };
  return (
    <input
      className="center"
      type="text"
      placeholder="search..."
      value={search}
      onChange={handleChange}
    />
  );
}
