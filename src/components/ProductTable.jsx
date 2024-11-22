import ProductRow from "./ProductRow";

function ProductTable({ products }) {
  return (
    <table className="table text-center">
      <thead className="table-light">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
            category={product.category}
          />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
