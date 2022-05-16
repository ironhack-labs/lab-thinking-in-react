import { useState } from 'react';

function SearchBar(props) {
  const [search, setSearch] = useState('');
  const handleSearch = (e) => {
    setSearch(e.target.value);
    props.filter(e.target.value)
  };

  return (
    <form>
      <label>Search</label>
      <br />
      <input type="text" name="search" value={search} onChange={handleSearch} />
    </form>
  );
}

export default SearchBar;
