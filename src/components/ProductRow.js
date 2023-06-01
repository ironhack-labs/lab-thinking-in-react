

function ProductRow({oneProduct}) {
  return (
    <>
      <tr>
        <td style={ (oneProduct.inStock) ? {color: 'black'} : {color: 'red'}}>{oneProduct.name}</td>
        <td>{oneProduct.price}</td>
      </tr>
    </>
  )
}

export default ProductRow
