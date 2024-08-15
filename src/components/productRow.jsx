

function ProductRow({product}) {


    const checkStock = {
        color: product.inStock ? 'black' : 'red'
    }

    return (
        <tr style={checkStock}>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow