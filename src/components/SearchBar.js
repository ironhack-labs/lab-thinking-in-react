function SearchBar(props) {
  //   const [productRow, setProductRow] = useState(jsonData);

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
            const chCheckbox = document.querySelector('#chInStock');
            props.filterProducts(event.target.value, chCheckbox.checked);
          }}
        />
      </div>
      <div>
        <input
          type="checkbox"
          name="chInStock"
          id="chInStock"
          onChange={(event) => {
            const input = document.querySelector('#searchBox');
            props.filterProducts(input.value, event.target.checked);
          }}
        />{' '}
        Only show products in stock
      </div>
    </div>
  );
}

export default SearchBar;
