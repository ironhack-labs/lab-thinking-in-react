function ProductRow (props) {

    const redIfFalse = {
        color: props.oneProduct.inStock ? 'black' : 'red'
    }

    return (
        <tr key={props.oneProduct.id}>
            <td style={redIfFalse} className="table-row">{props.oneProduct.name}</td>
            <td className="table-row">{props.oneProduct.price}</td>
        </tr>

    )
}

export default ProductRow