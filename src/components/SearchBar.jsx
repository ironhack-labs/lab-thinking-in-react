

function SearchBar(props) {

  const {filterBy, setFilterBy, setInStock} = props

  const handleFilterBy = (event)=>{
    setFilterBy(event.target.value)
  }

  const handleInStock = (event)=>{
    setInStock(event.target.checked)
  }

  return (
    <div className="search-bar">
      <p>Search</p>
      <input onChange={handleFilterBy} type="text" name="name" value={filterBy}/>
      <div className="check-box-container">
        <input onChange={()=>handleInStock(event)} type="checkbox" name="name" />
        <p className="in-stock">Only show products in stock</p>
      </div>
    </div>
  )
}

export default SearchBar