
const ProductRow = ({ product }) => {
    return (

        <tr key={product.id}>
            {product.inStock ? <td style={{ color: "black" }}>{product.name}</td> : <td style={{ color: "red" }}>{product.name}</td>}

            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow