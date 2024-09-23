function SearchBar({searchWord, setSearchWord, setFilterStock}){

    const handleChange = (event) =>{
        if(event.target.name ==="search") setSearchWord(event.target.value);
        else setFilterStock(event.target.checked)
    }


    return(
        <div id="search-bar" className="flex-column width-total">
            <p>Search</p>
            <input onChange={handleChange} type="text" name="search" value={searchWord}/>
            <label><input onChange={handleChange} type="checkbox"/> Only show products in stock</label>
        </div>
    );

}

export default SearchBar;