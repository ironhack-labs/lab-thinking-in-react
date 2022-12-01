const SearchBar = ({ setQuery }) => {

    const handleForm = (event) => {
        setQuery(event.target.value)
    }

    return (
        <input type="text" onChange={() => handleForm} />
    )
}

export default SearchBar