const SearchBar = ( { onChange, onCkecked, checked }) => {
  return (
    <div className="container">
      <div className="col-8">
      <h2>Search</h2>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Escribe lo que queires buscar"
          aria-label="Search"
          onChange={onChange}
        />
      </div>

      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckChecked"
          checked={checked}
          onChange={onCkecked}
        />
        <label className="form-check-label" htmlFor="flexCheckChecked">
          Checked checkbox
        </label>
      </div>
    </div>
  );
};

export default SearchBar;
