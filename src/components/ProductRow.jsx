function ProductRow({ eachProduct }) {
    const { name, price, inStock } = eachProduct




    return (

        <tr>
            <td style={{ color: inStock || 'red' }}>{name}</td>
            <td>{price}</td>
        </tr>
    )
}
export default ProductRow