

function SearchBar(props) {
    const handleSearch = (event) => {
        props.setQueryProp(event.target.value)
    }

    const handleCheckbox = (event) => {
        props.setCheckboxProp(event.target.value)
    }


  return (
    <div>
        <div className="search-bar">
           <div>
            <label htmlFor="search">Search</label>
           </div>
            <input type="search" onChange={handleSearch} />
        </div>
        <div>
            <input type="checkbox" onChange={handleCheckbox}/>
            <label htmlFor="checkbox">Only show products in stock</label>
        </div>
    </div>
  )
}

export default SearchBar;
