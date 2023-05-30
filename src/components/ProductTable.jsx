import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <div>
      <h1> ProductTable</h1>
      <ProductRow products={products} />
    </div>
  );
}

export default ProductTable;
