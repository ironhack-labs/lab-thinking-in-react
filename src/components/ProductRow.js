


function ProductRow(props) {

  const color = props.oneProduct.inStock ? 'black' : 'red'

  return (
    <tr className="product-row">
      <td style={{ color }}>{props.oneProduct.name}</td>
      <td>{props.oneProduct.price}</td>
    </tr>
  )
}

export default ProductRow
