
function SearchBar(props) {
const { searchValue, setSearchValue, inStock, setInStock } = props


function handleChange(e) {
    setSearchValue(() => e.target.value)
    }

function handleCheckbox () {
    setInStock(prev => !prev )
    }

return (
    <div id="search-container">
        <input type="text" name="searchBar" id="searchBar" placeholder="Search" value={searchValue} onChange={handleChange}></input>
        <div>
            <input type="checkbox" value={inStock} id="inStock" onChange={handleCheckbox}></input>
            <label htmlFor="inStock">Only show products in stock</label>
        </div>
    </div>
)

}

export default SearchBar;