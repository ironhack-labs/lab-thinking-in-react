
function ProductRow({product}) {

    console.log('product: ', product)
    if (product.inStock === false) {
        return (
            <tr>
            <td class="productRow">{product.name}</td>
            <td>{product.price}</td>
        </tr>
        )
    } else {
        return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
    }
  }



export default ProductRow; 