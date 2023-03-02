
const ProductRow = ({ elm, index }) => {


    return (

        <tr key={index}>
            <td>{elm.name}</td>
            <td>{elm.price}</td>
        </tr>
    )
}

export default ProductRow