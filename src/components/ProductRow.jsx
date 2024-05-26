const ProductRow = ({ name, price, inStock, id }) => {
    const rowStyle = {
        color: inStock ? 'black' : 'red'
    }
    return (
        <tr style = {rowStyle}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow