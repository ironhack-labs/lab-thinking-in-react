function SearchBar({ data }) {
  return (
    <div>
      <form className="d-flex flex-column" role="search">
        <h3 className="align-self-center">Search</h3>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <datalist>
          {data.map((i) => (
            <option value={i.name} />
          ))}
        </datalist>
      </form>
    </div>
  );
}

export default SearchBar;
