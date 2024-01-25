import './SearchBar.css';

export default function SearchBar({ setFilter }) {
  function updateNameFilter(e) {
    setFilter((filter) => ({ ...filter, productName: e.target.value }));
  }

  function updateOnlyStockFilter(e) {
    setFilter((filter) => ({ ...filter, onlyStock: e.target.checked }));
  }

  return (
    <section id="search" className="SearchBar">
      <form id="search-form">
        <span>Search</span>
        <input
          onChange={updateNameFilter}
          id="product-name"
          name="product-name"
          type="text"
        />
        <fieldset className="checkbox-fieldset">
          <input
            onChange={updateOnlyStockFilter}
            type="checkbox"
            name="only-stock"
            id="only-stock"
          />
          <label htmlFor="only-stock">Only show products in stock</label>
        </fieldset>
      </form>
    </section>
  );
}
