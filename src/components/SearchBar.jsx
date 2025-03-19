import React from 'react'

function SearchBar({product, onSearch,  onStockChange}) {

 const handleSearchChange = (event) => {
  const {value} = event.target;
  onSearch(value)
 }

 const handleStockChange = (event) => {
  onStockChange(event.target.checked);
};

  return (
    
    <>
    <p>Search</p>
    <form className="row g-3">
        
        <div className="col-auto">
        <input 
        className="form-control" 
        placeholder="search"
        onChange={handleSearchChange}
        />
       </div>
        
        <div className="col-auto">
          <label>
            <input type="checkbox" onChange={handleStockChange} />
            Show only products in stock
          </label>
        </div>
    </form>
    </>
  )
}

SearchBar.defaultProps = {
  product: '',
  onSearch:() => {},
  onStockChange: () => {}
}


export default SearchBar