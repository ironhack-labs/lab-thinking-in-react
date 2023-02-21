import './SearchBar.css';

export const SearchBar = ({ searchForProducts, toggleProductsInStock }) => {
  return (
    <section className="searchBar">
      <label htmlFor="searchInput">Search</label>
      <input
        onChange={(event) => searchForProducts(event.target.value)}
        className="searchBar__input"
        type="text"
        id="searchInput"
      />
      <div className="checkbox">
        <input onChange={toggleProductsInStock} type="checkbox" id="checkbox" />
        <label htmlFor="checkbox">Only show products in stock</label>
      </div>
    </section>
  );
};
