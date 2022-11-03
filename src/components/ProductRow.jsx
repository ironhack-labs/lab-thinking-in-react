export function ProductRow({ name, price, inStock }) {
  return (
    <tr>
      <>
        {inStock ? <td>{name}</td> : <td style={{ color: 'red' }}>{name}</td>}
      </>
      <td>{price}</td>
    </tr>
  );
}
