import './productsPage.css';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

const ProductsPage = () => {
  return (
    <div>
      <SearchBar />

      <ProductTable />
    </div>
  );
};

export default ProductsPage;
