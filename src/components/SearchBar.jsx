function SearchBar({ search, handleSearch, handleInStock }) {
  return (
    <div className="d-flex flex-column mb-3 ">
      <label className="align-self-center">Search</label>
      <input className="my-2 pe-5" type="text" value={search} onChange={handleSearch} placeholder="Enter your search terms" />

      <div className="align-self-center">
        <input className="me-2" type="checkbox" onChange={handleInStock} />
        <label>Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar;
