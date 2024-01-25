import './SearchBar.css';

export default function SearchBar() {
  return (
    <section id="search" className="SearchBar">
      <form id="search-form">
        <span>Search</span>
        <input id="product-name" name="product-name" type="text" />
        <fieldset className="checkbox-fieldset">
          <input type="checkbox" name="only-stock" id="only-stock" />
          <label htmlFor="only-stock">Only show products in stock</label>
        </fieldset>
      </form>
    </section>
  );
}
