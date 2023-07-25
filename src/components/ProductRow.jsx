const ProductRow = ({ product, searchTerm, showOnStock }) => {
  const productName = String(product.name).toLowerCase()
  const searchName = String(searchTerm).toLowerCase()

  if (productName.startsWith(searchName) && !showOnStock) {
    return (
      <tr className="ProductRow">
        <td className={product.inStock ? 'inStock' : 'outStock'}>
          {product.name}
        </td>
        <td>{product.price}</td>
      </tr>
    )
  } else if (productName.startsWith(searchName) && showOnStock) { 
    return (
      product.inStock
        ? <tr className="ProductRow">
            <td className='inStock'>
              {product.name}
            </td>
            <td>{product.price}</td>
        </tr>
        : void(0)
    )
  }
}

export default ProductRow