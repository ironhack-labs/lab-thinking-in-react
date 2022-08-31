import './ProductTable.css';
import ProductRow from './ProductRow';
const ProductTable = (props) => {
  return (
    <div>
      <table>
        <tr id="Thead">
          <th>Name</th>
          <th>Price</th>
        </tr>
        <tbody>
          {props.products.map((product) => {
            return <ProductRow product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default ProductTable;
