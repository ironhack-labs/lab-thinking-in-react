// src/components/ProductTable.jsx
import ProductRow from "./ProductRow";

function ProductTable({ products }) {


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>In Stock?</th>
          <th>Category</th>
       
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => (
          <ProductRow key={index} product={product} />
        
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
