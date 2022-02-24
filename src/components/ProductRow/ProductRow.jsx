function ProductRow({ name, price, id }) {
    return (
        <tr key={id}>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow