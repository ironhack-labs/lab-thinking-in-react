import ProductRow from './ProductRow';

function ProductTable() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow />
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
