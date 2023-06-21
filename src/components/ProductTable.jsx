import ProductRow from './ProductRow';

export default function ProductTable(props) {
  const { products } = props;
  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
          />
        ))}
      </tbody>
    </table>
  );
}
