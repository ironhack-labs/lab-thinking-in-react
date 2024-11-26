
function ProductRow({ product }) {
    return (
        <tr>
            <td className={product.id} style={{ padding: "8px", borderBottom: "1px solid #ddd", color: product.inStock ? "black" : "red" }}>
                {product.name}
            </td>
            <td style={{ padding: "8px", borderBottom: "1px solid #ddd" }} >{product.price}</td>
        </tr>
    );
}

export default ProductRow;