import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <div className="products-table">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
