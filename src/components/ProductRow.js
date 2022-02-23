function ProductRow(props) {
  return (
    <tr className="ProductRow">
      {props.product.inStock ? (
        <td className="ProductName">{props.product.name}</td>
      ) : (
        <td className="ProductName OutOfStock">{props.product.name}</td>
      )}
      <td className="ProductPrice">{props.product.price}</td>
    </tr>
  );
}

export default ProductRow;
