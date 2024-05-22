import ProductRow from './ProductRow';

function ProductTable(props) {
  const rows = props.products.map(product => (
    <ProductRow key={product.name} product={product} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default ProductTable;
