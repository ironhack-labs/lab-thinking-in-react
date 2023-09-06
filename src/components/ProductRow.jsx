function ProductsRow(props) {

    function checkColor(inStock) {
        if (!inStock) {
            return 'red'
        }
        else {
            return 'black'
        }
    }

    return (
        <tr>
            <td>{props.product.category}</td>
            <td style={{color: checkColor(props.product.inStock)}}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductsRow