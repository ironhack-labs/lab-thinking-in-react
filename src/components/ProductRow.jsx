

function ProductRow(props) {

  const { product } = props
  return (
    <>
      <div className="parejas">
        <p style={{color: !product['inStock'] && 'red'}}>{product.name}</p>
        <p>{product.price}</p>
      </div>
      <hr />
    </>
    )
  
}

export default ProductRow