
function SearchBar({ className, search, setSearch, checkInStock, setCheckInStock }) {

  return (
    <div className={`border border-primary ${className}`}>
      <h4 className="mb-3">Search</h4>

      
      <div className="input-group mb-3 px-5">
        <input value={search} 
        type="text" 
        className="form-control" 
        onChange={(ev) => {
          setSearch(ev.target.value)
        }} />
      </div>

      <div className="form-check d-flex justify-content-center">
        <input
         checked={checkInStock}
         className="form-check-input me-2" 
         type="checkbox"
         onChange={(ev) => {
          setCheckInStock(ev.target.checked)
         }} 

         />
        <span className="form-check-label" htmlFor="flexCheckDefault">
          Only show products in stock
        </span>
      </div>

  
    </div>
  );
}

export default SearchBar;
