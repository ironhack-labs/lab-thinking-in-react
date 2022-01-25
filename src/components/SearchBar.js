const SearchBar = (props) => {
  const searchChangeHandler = ({ target }) => {
    props.onChange(target.value);
  };
  const isInStockChangeHandler = ({ target }) => {
    props.isInStock(target.checked);
    console.log(target.checked);
  };

  return (
    <div>
      <input
        type="search"
        id="search"
        name="search"
        placeholder="Search"
        value={props.searchTerm}
        onChange={searchChangeHandler}
      />
      <input
        type="checkbox"
        name="storeCheck"
        onChange={isInStockChangeHandler}
      />
    </div>
  );
};

export default SearchBar;
