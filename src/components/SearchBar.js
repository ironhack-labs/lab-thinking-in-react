function SearchBar({
  searchInput,
  setSearchInput,
  checkedInput,
  setCheckedInput,
}) {
  const handleChange = (event) => {
    setSearchInput(event.target.value);
  };

  const handleChangeChecked = (event) => {
    setCheckedInput(!checkedInput);
  };

  return (
    <>
      <div className="searchdiv">
        <input id="search-id" type="text" value={searchInput} onChange={handleChange}/>
        <label for="search-id">Search</label>
        {/* {console.log(searchInput)} */}
      </div>

      <div className="checkeddiv">
        <input
          type="checkbox"
          value={checkedInput}
          onChange={handleChangeChecked}
          id="checkboxid" 
        /> 
        <label for="checkboxid">Only show products in stock</label>
          {/* {console.log(checkedInput)} */}  
      </div>
    </>
  );
}

export default SearchBar;
