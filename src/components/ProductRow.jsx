export function Row({product}) {
    return (
        <tr style={{color: product.inStock? 'inhert ' : 'red'}}>
            <td>{product.name}</td>
            <td>{product.category}</td>
            <td>{product.price}</td>
        </tr>
    )
}
