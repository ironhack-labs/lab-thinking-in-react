import ProductRow from "./ProductRow";
import jsonData from "../data.json";

function ProductTable({ filteredProducts }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Category</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;