function SearchBar({keyword, onChange}){
    
    return (
        <input 
            key="search-bar"
            type="text"
            placeholder="Search..."
            value={keyword}
            onChange={onChange}
        />
    )
}

export default SearchBar;