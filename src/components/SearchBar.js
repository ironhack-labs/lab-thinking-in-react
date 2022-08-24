import './SearchBar.css'
function SearchBar() {
    return(
        <div className='SearchBar'>
            <p>Search</p>
            <input className='SearchInput'></input><br />
            <input type='checkbox' id='Checkbox'></input>
            <label htmlFor="Checkbox"> Only show products in stock</label>
        </div>
    )
}

export default SearchBar;