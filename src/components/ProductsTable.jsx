import ProductRow from "./ProductRow";

const ProductTable = (props) => {
  const { products, searchTerm, showOnStock } = props;
  return (
    <div className="ProductTable">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow product={product} searchTerm={searchTerm} showOnStock={showOnStock} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable