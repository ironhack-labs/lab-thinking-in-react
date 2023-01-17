import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;

  return (
    <div>
      <h2>This is the ProductTable</h2>

      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <ProductRow products={products} />
          </tbody>
        </table>
      </div>

      <ProductRow />
    </div>
  );
}

export default ProductTable;
