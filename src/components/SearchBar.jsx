function SearchBar ({name, searchByWord}) {
    return (
    <div>
        <h2>Search</h2>

        <input onInput={e => searchByWord(e)} type="text"></input>
        <input type="checkbox"></input>Only products in stock
    </div>)
}

export default SearchBar;