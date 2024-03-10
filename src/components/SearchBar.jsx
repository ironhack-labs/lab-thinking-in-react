import { useState } from 'react';

function SearchBar({ filterProduct }) {
  const [searchWord, setSearchWord] = useState('');
  const handleChange = (e) => {
    const newWord = e.target.value;
    setSearchWord(newWord);
    filterProduct(newWord);
  };

  return (
    <div>
      <h3>Search</h3>
      <div>
        <input type="checkbox" placeholder="Search your items" />
        <label for="stock">Only show products in stock</label>
      </div>
      <input className='search-bar' onChange={handleChange} placeholder="Search your items" />
    </div>
  );
}

export default SearchBar;
