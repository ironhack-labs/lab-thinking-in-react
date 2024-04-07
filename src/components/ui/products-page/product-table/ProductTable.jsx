import ProductRow from "../product-row/ProductRow";

function ProductTable({ products }) {
  return (
    <table className="table">
      <thead>
        <tr className="table-secondary">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return (
            <ProductRow
              id={product.id}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default ProductTable;
