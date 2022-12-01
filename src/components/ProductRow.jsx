const ProductsRow = ({ product }) => {
    return (
        <tr>

            <td style={{ color: product.inStock ? "black" : "red" }}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductsRow;