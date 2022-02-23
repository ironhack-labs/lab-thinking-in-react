function ProductRow(props) {
  return (
    <tr>
      <td>
        {props.product.inStock ? (
          props.product.name
        ) : (
          <span className="red">{props.product.name}</span>
        )}
      </td>
      <td>{props.product.category}</td>
      <td>{props.product.price}</td>
      <td>{props.product.inStock ? '✅' : '❌'}</td>
    </tr>
  );
}

export default ProductRow;
