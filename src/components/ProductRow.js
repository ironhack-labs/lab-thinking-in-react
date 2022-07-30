function ProductRow (props) {
    return (
        <tr>
            <td style= {{color: props.inStock === false ? "red" : "black" }}>{props.name}</td>
            <td>{props.price}</td>
        </tr>
    )
}
export default ProductRow;