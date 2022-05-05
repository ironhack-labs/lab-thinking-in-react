import './ProductRow.css'

function ProductRow({ id, name, price, inStock }) {

    return (

        <tr key={id}>
            {inStock ? <td >{name}</td> : <td className="red">{name}</td>}
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow