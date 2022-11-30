function Search(props){
    const handleSearch = (e) => {
        props.setQuery(e.target.value);
    }
    
    const handleCheck = (e) => {
        props.setChecked(e.target.checked);
    }

    return(
        <div>
            <h2>Search</h2>
            <input type="text" onChange={ handleSearch } />
            <br />
            <input type="checkbox" onClick={ handleCheck } />Only show products in stock
        </div>

    )
}

export default Search;