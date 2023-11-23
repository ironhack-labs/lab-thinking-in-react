const ProductRow = ({ product }) => {

    const colorRed = { color: "red" }
    const colorBlack = { color: "black" }

    return (
        <>
            <tr>
                <td style={product.inStock ? colorBlack : colorRed}>{product.name}</td>
                <td>{product.price}</td>
            </tr>

        </>
    )
}

export default ProductRow