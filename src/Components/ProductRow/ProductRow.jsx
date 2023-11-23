const ProductRow = ({ product }) =>{
    return (
        <tr>
            <td className={!product.inStock? 'red-text' : ''}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

export default ProductRow