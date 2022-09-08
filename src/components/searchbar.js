function Searchbar({filterStock, search, setSearch, setFilterStock}) {
  return(
    <div>
        <input type="text" className="form-control" value={search} onChange={(event) => setSearch(event.target.value)}/>
        <input type="checkbox" className="form-checkbox-input" checked={filterStock} onChange={(event) =>setFilterStock(event.target.checked)} id="flexCheckDefault"/>
        <label htmlFor="flexCheckDefault">Show in stock</label>
    </div>
  )
}

export default Searchbar