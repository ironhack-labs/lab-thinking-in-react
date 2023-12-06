function ProductRow(props) {
    return (
        <tr>
            <td style={{ color: props.product.inStock ? "black" : "red" }}>
                {props.product.name}
            </td>
            <td>
                {props.product.price}
            </td>
        </tr>
    )
}

export default ProductRow;