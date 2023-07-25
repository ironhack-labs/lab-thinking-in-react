const SearchBar = ({ name, searchByWord, showOnlyInStock }) => {
  return (
    <div className="SearchBar">
      <div className="text-search">
        <p>Search</p>
        <input onInput={(e) => searchByWord(e)} type="text"></input>
      </div>
      <div>
        <input onChange={(e) => showOnlyInStock(e)} type="checkbox"></input>Only show products in stock
      </div>
    </div>
  );
};

export default SearchBar