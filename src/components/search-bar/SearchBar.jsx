function SearchBar({ search, setSearch, filterInStock, setFilterInStock }) {
  return (
    <div>
      <form className="d-flex flex-column" role="search">
        <h5 className="align-self-center">Search</h5>
        <input 
          value={search}
          className="form-control me-2"
          type="text"
          placeholder="Search"
          aria-label="Search"
          onChange={(ev) => {
            setSearch(ev.target.value)
          }}
        />
        <div className="form-check d-flex justify-content-center gap-2 mt-2">
          <input className="form-check-input" type="checkbox" checked={filterInStock} onChange={(ev) => {
            setFilterInStock(ev.target.checked)
          }} id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Only show products in stock
          </label>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
