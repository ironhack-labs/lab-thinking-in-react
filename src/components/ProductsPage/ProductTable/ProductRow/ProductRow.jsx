
function ProductRow({ product, message }) {

    return (
        <tr>
            <td className={!product.inStock ? 'text-danger fw-medium' : ''}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

export default ProductRow;