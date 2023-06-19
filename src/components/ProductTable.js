import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => {
            return <ProductRow name={product.name} price={product.price} />;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
