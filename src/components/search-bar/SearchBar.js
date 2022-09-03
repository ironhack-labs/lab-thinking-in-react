function SearchBar({ search, checked }){
  return (
    <div className="search-bar d-flex justify-content-center text-center flex-column">
      <span className="mb-2">Search</span>
      <input id="searchInput" className="mb-2 form-control" type="text" onChange={search}/>
      <div className="d-flex justify-content-center me-2">
        <input id="checkInput" className="form-check-input" type="checkbox" onChange={checked}/>
        <span className="ms-2">Only show products in <strong>stock</strong></span>
      </div>
    </div>
  );
}

export default SearchBar;