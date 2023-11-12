function ProductRow(props) {
    const inStockStyle = {
        color: 'black',
    }

    const notInStockStyle = {
        color: 'red',
    }

    return (
        <tr key={props.product.id}>
            <td style={props.product.inStock ? inStockStyle : notInStockStyle}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductRow;