const ProductRow = (products) => {
  return (
    <div>
        {products.map((product) => {
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
        } 
        )}
    </div>
  )
}

export default ProductRow