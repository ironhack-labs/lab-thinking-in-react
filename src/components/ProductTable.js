import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
