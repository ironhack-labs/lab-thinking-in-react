function ProductRow({ id, name, price }) {
  return (
    <tr key={id}>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}

export default ProductRow;
