function SearchBar(props) {
    return (
        <div>
            <input type="text" id="searchInput" placeholder="Search..." onChange={e => props.search(e.target.value)} />
            <label>
                <input type="checkbox" id="searchInTitles" /> Only Show products in stock
            </label>
        </div>
    );
}

export default SearchBar;