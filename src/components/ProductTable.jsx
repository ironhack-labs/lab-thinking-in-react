import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  const productRows = products.map(product => {
    return <ProductRow {...product} />
  });

  return (
    <table>
      <thead>
        <tr>
          <th key='name'>Name</th>
          <th key='price'>Price</th>
        </tr>
      </thead>

      <tbody>
        {productRows}
      </tbody>
    </table>
  );
}

export default ProductTable;