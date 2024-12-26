function SearchBar(props) {

    // console.log(props);
    const { searchValue, setSearchValue,showInStockOnly, setShowInStockOnly } = props;

    const handleSearch = (event) => {
        setSearchValue(event.target.value);
    }

    const handleFilter = (event) => {
        setShowInStockOnly(event.target.checked)
    }

  return (
    <div className="searchBar-container">
      <label className="searchBar-label">
        <p>Search</p>
        <input type="text" value={searchValue} onChange={handleSearch} />
      </label>
      <div>
        <label className="checkbox-label">
          <input type="checkbox" onChange={handleFilter}/>
          Only show products in stock
        </label>
      </div>
    </div>
  );
}

export default SearchBar;
