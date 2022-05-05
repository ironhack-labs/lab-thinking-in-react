function ProductRow(props) {
    let style = {color:'#fff'};
    if (!props.product.inStock) {
        style = {color: 'red'};
    }

    return (
        <tr>
            <td style={style}>{props.product.name}</td>
            <td>{props.product.price}</td>
        </tr>
    )
}

export default ProductRow;





