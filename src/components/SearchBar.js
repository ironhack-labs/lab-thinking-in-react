function SearchBar(props) {
  const handleSearchChange = (event) => {
    props.setQuery(event.target.value);
  };

  return (
    <div>
      <p>Search</p>
      <input
        type="text"
        value={props.query}
        placeholder="Search by name"
        name="input"
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default SearchBar;
