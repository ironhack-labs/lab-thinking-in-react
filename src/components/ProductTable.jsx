import ProductRow from "./ProductRow";

const ProductTable = ({ products, setProducts }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            name={product.name}
            price={product.price}
            inStock={product.inStock}
          />
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
