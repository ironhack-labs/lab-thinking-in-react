function SearchBar(props) {
    
    const handleChange = (e) => {
        e.preventDefault();
        props.setSearchTerm(e.target.value);
    };
    
    return <div>
        <input
            type="search"
            placeholder="Search here"
            onChange={handleChange}
            value={props.searchTerm} />
    </div>
};

export default SearchBar;