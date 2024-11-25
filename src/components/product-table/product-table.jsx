import ProductRow from "../product-row/product-row";

function ProductsTable({ className, products }) {
  return (
    <table className="table m-5">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ProductRow products={products} />
      </tbody>
    </table>
  );
}
export default ProductsTable;
