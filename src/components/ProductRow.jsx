export function ProductRow(props) {
  const fontColor = props.inStock ? 'Black' : 'Red';
  return (
    <tr>
      <td className={fontColor}>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
}
