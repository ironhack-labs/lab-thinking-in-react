function ProductRow(props) {
  return (
    <tr className="row">
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}

export default ProductRow;
