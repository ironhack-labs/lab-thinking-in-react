import './ProductRow.css'

export default function ProductRow({ category, price, name, insStock, id }) {
    return (
        <tr>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}