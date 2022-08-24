import ProductRow from "./ProductRow";
import './ProductsTable.css'

function ProductsTable( {item} ) {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow item={item} />
        </tbody>
      </table>
    </div>
  );
}

export default ProductsTable;
