import { ProductRow } from "./ProductRow";

export const ProductTable = (props) => {
  const { filteredProducts } = props;

  return (
    <table className="table">
      <thead className="table-head">
        <tr className="table-row">
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {filteredProducts.map((product) => {
          return <ProductRow key={product.id} product={product} />;
        })}
      </tbody>
    </table>
  );
};