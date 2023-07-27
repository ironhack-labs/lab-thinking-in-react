import ProductRow from './ProductRow';

function ProductsTable({products}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
      {products.map((product) => (
          <ProductRow key={product.name} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductsTable;
