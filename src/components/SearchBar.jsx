
function SearchBar({setSearchItem}) {
    
    const handleChange = (ev) => {
        setSearchItem(ev.target.value)
    }

    return (
        <div>
            <input type="text" placeholder="search..." onChange={handleChange} />
        </div>
    )
} 

export default SearchBar;
