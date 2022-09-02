import "./SearchBar.css";


function SearchBar ({handleSearch, handleChecked}) {
  
  return(
    <div className="search-bar d-flex flex-column text-center">
      <h5 className="mb-2">Search</h5>
      <input type="text" onChange={handleSearch}/>
      <div className="d-flex justify-content-center">
        <input type="checkbox" onChange={handleChecked}/>
        <h6>Only show products in stock</h6>
      </div>
    </div>
  )
}

export default SearchBar;