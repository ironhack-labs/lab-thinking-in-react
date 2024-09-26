function SearchBar({ searchNombre, setSearchNombre, isInStock, setIsInStock }) {

  const handleStockProducts = (event) => {
    setIsInStock(event.target.checked)
  }

  return (
    <>
      <div>SearchBar</div>
      <div>
        <input
        style={{backgroundColor:"lightgray"}}
          type="text"
          value={searchNombre}
          onChange={(e) => setSearchNombre(e.target.value)}
        />
      </div>
      <div>
        <input type="checkbox" checked={isInStock} onChange={handleStockProducts}/> Only show products in stock
      </div>
    </>
  );
}

export default SearchBar;
