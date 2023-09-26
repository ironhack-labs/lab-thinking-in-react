/* eslint-disable react/prop-types */
const ProductRow = ({ price, inStock, name }) => {
  return (
    <tr>
      <th scope="row" className={!inStock ? "text-danger" : ""}>
        {name}
      </th>
      <td>{price}</td>
    </tr>
  );
};

export default ProductRow;
