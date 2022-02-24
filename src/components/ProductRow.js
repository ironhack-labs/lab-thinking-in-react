
function ProductRow(props) {
    let productColor = 'black'

    if (!props.productRow.inStock) productColor = 'red'

    // console.log(props)
    return (
        <tr>
            <td style={{ color: productColor }}>{props.productRow.name}</td>
            <td>{props.productRow.price}</td>
        </tr >
    )
}

export default ProductRow;