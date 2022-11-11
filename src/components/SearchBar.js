import { useState } from 'react';

function SearchBar({ product, searchTerm, setSearchTerm }) {
  const [input, setInput] = useState('');

  const inputChanger = (e) => {
    setInput(e.target.value);
  };

  console.log(input);
  return (
    <div className="SearchBar">
      <h3>Search</h3>
      <input type="text" onChange={inputChanger}></input>
    </div>
  );
}

export default SearchBar;
