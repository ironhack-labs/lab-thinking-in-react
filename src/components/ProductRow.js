

function ProductRow(props) {
    const { product } = props;

    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
            <td>{product.inStock}</td>
            <td>{product.id}</td>
        </tr>
    )
}

export default ProductRow;