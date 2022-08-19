import './SearchBar.css'

function SearchBar () {
    return (
        <div className="Searchbar">
            <p>Search</p>
            <form className="search-form">
                <input type="text" />
            </form>
            <form className="check-form">
                <input type="checkbox" />
                <p>Only show products in stock</p>
            </form>           
        </div>
    )
}
export default SearchBar; 