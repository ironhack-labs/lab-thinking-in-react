function Searchbar(props) {
    const { search, updateSearchAndFilter, filterInStock, updateFilterInStock } =
      props;
  
    return (
      <div className='search'
              >
        <label >Search</label>
        <input type="text" value={search} onChange={updateSearchAndFilter} />
  
        <div>
          <input
            type="checkbox"
            value={filterInStock}
            onChange={updateFilterInStock}
          />
          <label>Only show products in stock</label>
        </div>
      </div>
    );
  }
  
  export default Searchbar;