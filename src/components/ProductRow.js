function ProductRow(props) {
  return (
    <tr>
      {console.log(props)}
      {props.products.inStock ? (
        <td>{props.products.name}</td>
      ) : (
        <td className="red">{props.products.name}</td>
      )}
      <td>{props.products.price}</td>
    </tr>
  );
}
export default ProductRow;
