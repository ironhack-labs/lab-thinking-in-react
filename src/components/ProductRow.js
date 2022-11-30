function ProductRow(props){
    const { name, inStock, price } = props.product;
    const checked = props.check;
    return (

        <tr>
            {inStock ? <td style={{color: "black"}}>{name}</td> : <td style={{color: "red"}}>{name}</td>}
            <td>{price}</td>
        </tr>
    )
}

export default ProductRow;