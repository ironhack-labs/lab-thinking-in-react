

function ProductRow({oneProduct}) {
  return (
    <>
      <tr>
        <td>{oneProduct.name}</td>
        <td>{oneProduct.price}</td>
      </tr>
    </>
  )
}

export default ProductRow
