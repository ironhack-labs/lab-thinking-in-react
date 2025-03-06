/* eslint-disable react/prop-types */
function ProductRow({ product, rowNum }) {
  const renderType = product.inStock ? {} : { color: "red", fontWeight: "500" };

  return (
    <tr className={product.inStock ? "" : "table-light"}>
      <td style={renderType}>{rowNum}</td>
      <td style={renderType}>{product.name}</td>
      <td style={renderType}>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
