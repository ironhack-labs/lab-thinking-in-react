import ProductRow from './ProductRow';

function ProductTable({products}) {
  return (
    <div className="table-wrapper">
      {products.length ? <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (<ProductRow key={product.id} product={product} />)
          })}
        </tbody>
      </table>: <span>No data to display</span>}
    </div>
  );
}

export default ProductTable;
