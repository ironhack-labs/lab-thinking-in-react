import { useState } from 'react';

function SearchBar(props) {
  const [inputText, setInputText] = useState('');

  let handleSearch = (e) => {
    setInputText(e.target.value);
    props.search(e.target.value);
  };

  return (
    <div>
      <label>Search</label>
      <input type="text" value={inputText} onChange={handleSearch} />
    </div>
  );
}

export default SearchBar;
