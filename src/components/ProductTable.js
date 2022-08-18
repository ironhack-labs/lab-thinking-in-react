import ProductRow from './ProductRow';
import SearchBar from './SearchBar';

function ProductTable(props) {
  return (
    <div>
      <SearchBar />
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        {props.products.map((product) => {
          return <ProductRow products={product} />;
        })}

        {/* <tr>
          <td>NAME</td>
          <td>PRICE</td>
        </tr> */}
      </table>
    </div>
  );
}

export default ProductTable;
