function SearchBar (props) {
    
    const handleSearch = (event) => {
    props.setSearch(event.target.value);
    console.log(event);
  };
  
    return (
        <input
          type="search"
          placeholder="Search here"
          onChange={handleSearch}
          />
    )
}

export default SearchBar