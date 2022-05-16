import ProductRow from './ProductRow';


function showAllProducts(array) {
  return array.map((item, index) => {
    return <ProductRow props={item} key={item.id} />;
  });
}

function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>

      <tbody>{showAllProducts(props.data)}</tbody>
    </table>
  );
}

export default ProductTable;
