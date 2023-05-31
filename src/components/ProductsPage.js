import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

function ProductsPage() {
  return (
    <div>
      <h1>IronStore</h1>
      <SearchBar />
      <article>
        <ProductTable />
      </article>
    </div>
  );
}

export default ProductsPage;
