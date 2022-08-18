function SearchBar() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div class="search-container">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search.." name="search" />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default SearchBar;
