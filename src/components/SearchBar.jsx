function SearchBar({ setProductSearch }) {
  return (
    <div>
      <label>Seach</label>
      <br/>
      <input type="text" onChange={(event) => setProductSearch(event.target.value)}/>
    </div>
  );
}
export default SearchBar;


