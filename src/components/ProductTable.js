import ProductRow from './ProductRow';

function ProductTable(props) {
  return (
    <div id="table">
      <table>
        <thead>
          <tr>
            <th className="headers">Name</th>
            <th className="headers">Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow productName={props.products}></ProductRow>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
