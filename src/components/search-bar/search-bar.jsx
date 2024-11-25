function SearchBar({ className, searchText }) {
  const handleInputChange = (event) => {
    searchText(event.target.value); 
  };

  return (
    <input
      type="text"
      className={`border-2 rounded-4 ${className}`}
      placeholder="Search products..."
      onChange={handleInputChange}
    />
  );
}

export default SearchBar;
