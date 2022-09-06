function SearchBar(props) {

  return (
    <div>
      <label>
        <input value={props.search} type="text" onChange={props.filter} id="searchbar" ></input>
      </label>
      <label>
        <input type="checkbox" onChange={props.filter} value="instock" id="checkbox"></input>
        <p>Only show products in stock</p>
      </label>
    </div>
  );
}

export default SearchBar;
