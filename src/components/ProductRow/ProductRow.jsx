const ProductRow = ({ category, price, inStock, name, id, }) => {

    return (

        <tr>
            <td style={!inStock ? { color: 'red' } : undefined}>{name}</td>
            <td>{price}</td>
        </tr >

    )
}

export default ProductRow