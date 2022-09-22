
const ProductRow = ({ product }) => {
    const red = { color: "red" }

    return (
        <tr>
            <td style={product.inStock ? red : null}>{product.name}</td>
            <td>{product.price}</td>
            <td>{product.category}</td>
        </tr>
    );
}

export default ProductRow