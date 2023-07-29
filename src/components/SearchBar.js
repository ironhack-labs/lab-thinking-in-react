function SearchBar (props) {

    const { handleSearch } = props
 
    return(
        <>
            <h3>Search</h3>
            <input type="search" placeholder="Search..." 
            onChange={e => handleSearch(e.target.value)} ></input>
            <div>
                <input type="checkbox" ></input>
                <label>Only show products in stock</label>
            </div>
        </>
    )
  }
  
  export default SearchBar