function ProductRow(props) {

    const eachProduct = props.eachProduct;

    const rowStyle = {
        color: eachProduct.inStock ? "black" : "red",
    }

    return(
        <tr style={rowStyle} className="product-row">
            <td>{eachProduct.name}</td>
            <td>{eachProduct.price}</td>
        </tr>
    )
}

export default ProductRow;