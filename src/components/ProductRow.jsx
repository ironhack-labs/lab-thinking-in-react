/* eslint-disable react/prop-types */
function ProductRow(props) {
    const product = props.product

    return (
        <tr>
            <td style={{ color: product.inStock ? "black" : "red" }}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow