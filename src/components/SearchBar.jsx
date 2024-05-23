const SearchBar = ({search, handleSearch}) => {


    return (
        <div>
        <h2>Search</h2>
        <form>
        <input type="search" name="SearchBar" value={search} onChange={handleSearch} />
        </form>
         </div>
    )
};

export default SearchBar;