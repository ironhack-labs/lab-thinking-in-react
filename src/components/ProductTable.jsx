import ProductRow from "./ProductRow";

const ProductTable = ({ products }) => {
  return (
    <div>
      <table className="prod-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return <ProductRow key={product.id} product={product} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
