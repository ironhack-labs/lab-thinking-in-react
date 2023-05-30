import ProductRow from './ProductRow';

function ProductTable({ products, search, showInStock }) {
  return (
    <div>
      <h1> ProductTable</h1>
      <ProductRow
        products={products}
        search={search}
        showInStock={showInStock}
      />
    </div>
  );
}

export default ProductTable;
