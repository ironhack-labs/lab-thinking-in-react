function ProductRow(props){
    const color = () =>   props.inStock ? "#000000" : "#FF0000"
    return (
        <tr>
            <td style={{ color: color() }}>
                    {props.name}
            </td>
            <td>{props.price}</td>
            <td>{props.category}</td>
        </tr>
    )
}


export default ProductRow