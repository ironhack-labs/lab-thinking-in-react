import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  const productsArr = products.map((product) => (
    <ProductRow
      key={product.id}
      name={product.name}
      price={product.price}
      inStock={product.inStock}
    />
  ));
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>{productsArr}</tbody>
      </table>
    </div>
  );
};

export default ProductTable;
