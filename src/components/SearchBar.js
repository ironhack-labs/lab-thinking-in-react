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
          onChange={(event) => {
            props.filterProducts(event.target.value);
          }}
        />
      </div>
      <div>
        <input type="checkbox" name="chInStock" id="chInStock" /> Only show
        products in stock
      </div>
    </div>
  );
}

export default SearchBar;
