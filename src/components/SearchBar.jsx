function SearchBar({ searchTerm, onSearch }) {
  return (
    <div>
     <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={onSearch}
      />
    </div>
  );
}

export default SearchBar;