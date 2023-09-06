export function ProductRow({oneProduct}) {
  return (
    <tr>
    <td>
    {oneProduct.inStock ? <p>{oneProduct.name}</p> : <p className="red">{oneProduct.name}</p> }
    </td>
    <td> <p>{oneProduct.price}</p></td>
    </tr>
  );
}
