
const ProductRow = ({ product }) => {

    const { name, price, inStock } = product
    const redStyle = { color: 'red' }

    return (
        <tr>{!inStock ? <td style={redStyle}>{name}</td> : <td>{name}</td>}<td>{price}</td></tr>
    )

}

export default ProductRow