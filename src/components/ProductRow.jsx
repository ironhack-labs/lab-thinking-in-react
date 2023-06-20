export default function ProductRow(props) {
  const { name, price } = props;

  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
    </tr>
  );
}
