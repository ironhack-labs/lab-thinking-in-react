function SearchBar({searchValue, setSearchValue, onlyShowInStock, setOnlyShowInStock}) {
    const searchValueHandler=(e)=>{setSearchValue(e.target.value)};
    const checkboxValueHandler=()=>{setOnlyShowInStock(!onlyShowInStock)};

    return <div>
        <label>Search: </label>
        <input value={searchValue} type="text" onChange={searchValueHandler}></input>

        <label>Only show items in stock? </label>
        <input value={onlyShowInStock} type="checkbox" onChange={checkboxValueHandler}/>
    </div>
}

export default SearchBar;