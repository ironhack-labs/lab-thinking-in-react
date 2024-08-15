

function SearchBar({searchTerm, onSearch, showInStock, onStock}) {
  
    return (
      <div>
            <form>
                <label htmlFor="search">Enter Product:</label>
                <input 
                    type="text"
                    id="search"
                    name="search"
                    value={searchTerm} 
                    onChange={(e) => onSearch(e.target.value)}
                />
                <br/>
                <input 
                type="checkbox" 
                name="stock" 
                value={showInStock}
                onChange={(e) => onStock(e.target.checked)}
                />
                <label htmlFor="stock">Only show products in stock</label>
            </form>
        </div>
    )
  }

  export default SearchBar