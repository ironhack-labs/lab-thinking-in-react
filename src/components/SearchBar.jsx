
function SearchBar({ onSearch, onInStockChange }) {
    const handleInputChange = (event) => {
      onSearch(event.target.value);
    };
  
    const handleCheckboxChange = (event) => {
      onInStockChange(event.target.checked);
    };
  
    return (
      <div>
        <h2>Search Products</h2>    
        <input type="text" placeholder="Search..." onChange={handleInputChange} />
        <br />
    
        <label>
          <input type="checkbox" onChange={handleCheckboxChange} /> Only show products in stock
        </label>
      </div>
    );
  }
  
  export default SearchBar;
  