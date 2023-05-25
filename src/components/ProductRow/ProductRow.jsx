
const ProductRow = ({ elm }) => {

    const setColor = elm.inStock ? 'black' : 'red'

    return (
        <>
            <tr>
                <td style={{ color: setColor }}>{elm.name}</td>
                <td style={{ color: setColor }}>{elm.price}</td>
            </tr>
        </>

    )
}

export default ProductRow