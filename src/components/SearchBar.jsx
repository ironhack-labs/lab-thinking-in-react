function SearchBar({ onFilterTextChange, onInStockChange }) {
  
    const handleChange = (event) => { 
        onFilterTextChange(event.target.value) 
    }

    const handleInStockChange = (e) => {
        onInStockChange(e.target.checked);
      };

    return (
    <>
        <div>Search</div>

        <form className="searchBar">
            <input 
                type="text"
                className="form-control" 
                onChange={handleChange}>
            </input>
            <label>
                <input
                    type="checkbox"
                    onChange={handleInStockChange}>
                </input>
                Only show products in stock
            </label>
        </form>
    </>
  )
}

export default SearchBar