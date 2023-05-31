import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductsPage() {
  return (
    <div className="products-page">
      <h1>IronStore</h1>
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default ProductsPage;
