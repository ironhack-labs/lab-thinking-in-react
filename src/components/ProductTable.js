// ProductTable.js

import ProductRow from "./ProductRow";

function ProductTable(props) {
  const products = props.products;
  const rows = products.map((product) => (
    <ProductRow product={product} key={product.name} />
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

export default ProductTable;
