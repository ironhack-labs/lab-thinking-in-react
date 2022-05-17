function SearchBar (props) {

    const handleSearchChange = event => {
        props.handleSearchChange(event);
    }

    const handleShowOnlyInStockChange = event => {
        props.handleShowOnlyInStockChange(event);
    }

    return (
        <div className='SearchBar'>
            <form>
                <label>Search</label>
                <input type='text' onChange={handleSearchChange}></input>
                <span>
                    <label> Only show products in stock</label>
                    <input type='checkbox' onChange={handleShowOnlyInStockChange}></input>
                </span>

            </form>
        </div>
    )
}

export default SearchBar;