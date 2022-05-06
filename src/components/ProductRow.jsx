function ProductRow(props) {
  const { product } = props

  return (
    <div>
      <div className={product.inStock ? 'product-row' : 'product-row-no-stock'}>
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
      {/* {product.inStock
        ?
        <div className="product-row">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        :
        <div className="product-row-no-stock">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div> 
      } */}
    </div>
  )
}

export default ProductRow;