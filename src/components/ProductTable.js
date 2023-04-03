import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <table className="table">
      <thead>
        <tr className="table-dark">
          <th scope="col">Name</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow product={product} key={product.id} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
