function SearchBar(props) {
  //   const [productRow, setProductRow] = useState(jsonData);

  function handleChange(event) {
    const input = document.querySelector('#searchBox');

    props.filterProducts(input.value, event.target.checked);
  }

  return (
    <div className="searchContainer">
      <div>Seach</div>
      <div>
        <input
          type="text"
          name="searchBox"
          id="searchBox"
          placeholder="Type to search"
          onChange={(event) => {
            props.filterProducts(event.target.value);
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="chInStock"
          id="chInStock"
          onChange={handleChange}
        />{' '}
        Only show products in stock
      </div>
    </div>
  );
}

export default SearchBar;
