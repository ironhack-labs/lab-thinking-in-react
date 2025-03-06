/* eslint-disable react/prop-types */
import ProductRow from "./ProductRow";

function ProductTable({ data }) {
  return (
    <table className="table table-hover">
      <thead className="table-dark h6">
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className="table-group-divider">
        {data.map((element, index) => (
          <ProductRow product={element} rowNum={index + 1} key={element.id} />
        ))}
      </tbody>
    </table>
  );
}

export default ProductTable;
