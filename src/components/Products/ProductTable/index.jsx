import './ProductTable.css';

export default function ProductTable({ products }) {
  return (
    <section className="ProductTable" id="products">
      <table id="product-table">
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
              inStock={product.inStock}
            />
          ))}
        </tbody>
      </table>
    </section>
  );
}

function ProductRow({ name, price, inStock }) {
  return (
    <tr>
      <td className={!inStock ? 'out-of-stock' : ''}>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
