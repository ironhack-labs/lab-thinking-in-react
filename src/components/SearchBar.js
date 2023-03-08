function SearchBar () {
    return(
        <div className='search-bar'>
            <h4>Search</h4>
            <input className='bar' type={"text"} />
            <div>
                <input type={"checkbox"} name={"check"} />
                <label htmlFor="check">Only show products in stock</label>
            </div>
        
        </div>
    );
};

export default SearchBar;