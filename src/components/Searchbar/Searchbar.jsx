const SearchBar = ({ setFilterText, filterText }) => {

    const handleInput = e => {
        setFilterText(e.target.value)
    }

    return (
        <div>
            <input type="text" onChange={handleInput} value={filterText} />
        </div>
    )
}

export default SearchBar