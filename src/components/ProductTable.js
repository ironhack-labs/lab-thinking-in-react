import ProductRow from './ProductRow';

function ProductTable({ ProductRows }) {
  return (
    <div className="ProductList">
      <table className="ProductTable">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {ProductRows.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
