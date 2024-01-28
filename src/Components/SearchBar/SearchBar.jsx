const SearchBar = ({ value, onChange }) => {
    return (
      <div className="w-100 p-2 d-flex align-items-center justify-content-center">
        <input
          placeholder="Search"
          value={value}
          name="search"
          onChange={(ev) => onChange(ev.target.value)}
          className="form-control"
        />
      </div>
    );
  };
  
  export default SearchBar;