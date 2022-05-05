import './ProductRow.css'
function ProductRow({ product }) {
    return (
        <tr>
            <td>name:<span className={product.inStock ? '' : 'red'}>{product.name}</span> </td>
            <td>category: {product.category} </td>
            <td>price: {product.price} </td>
            <td>inStock: {product.inStock ? '✅' : ''} </td>
        </tr>
    )
}

export default ProductRow