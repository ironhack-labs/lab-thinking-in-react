import ProductRow from './ProductRow';

function ProductTable({ products, search }) {
  return (
    <div>
      <h1> ProductTable</h1>
      <ProductRow products={products} search={search} />
    </div>
  );
}

export default ProductTable;
