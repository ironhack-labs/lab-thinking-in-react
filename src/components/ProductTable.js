import ProductRow from './ProductRow';

function ProductTable({ products }) {
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
          <ProductRow products={products} />
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
