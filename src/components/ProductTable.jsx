import ProductRow from './ProductRow';

function ProductTable(props) {

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => <ProductRow key={product.id} product={product}/>)}
      </tbody>
    </table>
  );
}

export default ProductTable;
