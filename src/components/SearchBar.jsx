function SearchBar(props) {
  
    return (
      <header>
        <div>
            <label htmlFor="search">Search</label>
            <input type="search" id="search" name="search" placeholder="Search for product" onChange={props.searchFilter} />
        </div>
        <div>
            <input type="checkbox" id="in-stock" name="inStock"  onChange={props.inStockFilter} />
            <label htmlFor="in-stock">Only show products in stock</label>
        </div>
      </header>
    );
  }
  
  export default SearchBar;