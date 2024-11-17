function SearchBar ({
  searchTerm,
  onSearchChange,
  showInStock,
  onInStockChange
}) {
  const handleInputChange = event => {
    onSearchChange(event.target.value)
  }

  const handleCheckboxChange = event => {
    onInStockChange(event.target.checked)
  }

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={handleInputChange}
        placeholder='Search products...'
      />
      <div>
        <input
          type='checkbox'
          checked={showInStock}
          onChange={handleCheckboxChange}
        />
        <label>Only show products in stock</label>
      </div>
    </div>
  )
}

export default SearchBar
