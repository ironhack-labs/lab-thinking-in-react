const SearchBar = (props) => {
  const { searchProduct } = props

  function handleChange(e) {
    searchProduct(e.target.value)
  }
  return (
    <>
      <div>
          <p>Search</p>
          <input type='text' onChange={handleChange} />
      </div>
      <div>
          <input type="checkbox" />
          <p>Only show products in stock</p>   
      </div>
    </>
  )
}

export default SearchBar