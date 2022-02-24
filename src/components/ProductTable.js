import ProductRow from './ProductRow';

function ProductTable({ products }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((eachProduct) => {
            return <ProductRow product={eachProduct} />;
          })}
        </tbody>
      </table>
    </>
  );
}

export default ProductTable;