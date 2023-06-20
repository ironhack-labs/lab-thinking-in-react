export default function SearchBar(props) {
  const { query, isInStockChecked, handleOnlyInStock, handleSearchQuery } =
    props;

  return (
    <div className="search-bar">
      <label className="search-bar__query-label" htmlFor="query">
        Search
      </label>
      <input
        className="search-bar__query"
        type="text"
        id="query"
        value={query}
        onChange={handleSearchQuery}
      />
      <div className="search-bar__in-stock">
        <input
          checked={isInStockChecked}
          type="checkbox"
          id="inStock"
          onChange={handleOnlyInStock}
        />
        <label htmlFor="inStock">Only show products in stock</label>
      </div>
    </div>
  );
}
