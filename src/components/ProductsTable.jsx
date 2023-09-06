import ProductRow from './ProductRow';

function ProductsTable({ products, deleteProduct, resetProduct }) {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan="3" className="reset" onClick={resetProduct}>
            Reset
          </th>
        </tr>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
