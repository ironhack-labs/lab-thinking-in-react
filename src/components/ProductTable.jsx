import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;
  return (
    <div className="tableContainer">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => {
            return (
              <ProductRow
                key={product.id}
                name={product.name}
                price={product.price}
                inStock={product.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
