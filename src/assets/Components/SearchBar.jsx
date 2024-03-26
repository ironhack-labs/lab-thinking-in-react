function SearchBar({ handleChange, handleCheck }) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search"
        name=""
        id=""
        onChange={handleChange}
      />
      <label htmlFor="check">instock</label>
      <input type="checkbox" name="check" onChange={handleCheck} />
    </div>
  );
}

export default SearchBar;
