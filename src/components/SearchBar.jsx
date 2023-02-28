export const SearchBar = ({ handleSearch, showInStockOnly }) => {
  return (
    <div>
      <label>
        {' '}
        Search
        <input type="text" onChange={(e) => handleSearch(e.target.value)} />
      </label>
      <br />
      <label>
        Show products in stock{' '}
        <input
          type="checkbox"
          onChange={(e) =>
            e.target.checked ? showInStockOnly(true) : showInStockOnly(false)
          }
        />{' '}
      </label>
    </div>
  );
};
