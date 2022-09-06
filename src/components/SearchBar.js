function SearchBar(props) {


  return (
    <div id="searchbox">
      <label>
        Filter by name:
        <input type="text" onChange={props.search} id="searchbar" ></input>
      </label>
      <hr/>
      <label id="checkbox">
        <input type="checkbox" onChange={props.search} value="instock" id="checkbox"></input>
        Only show products in stock
      </label>
      <hr/>
    </div>
  );
}

export default SearchBar;
