function ProductRow ({ product }) {
  const rowStyle = {
    color: product.inStock ? 'black' : 'red'
  }

  return (
    <tr style={rowStyle}>
      <td>{product.name}</td>
      <td>{product.price}</td>
    </tr>
  )
}

export default ProductRow
