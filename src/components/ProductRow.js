
function ProductRow(props) {

    return(
            <tr>
                {props.product.inStock ? <td>{props.product.name}</td> : <td style={{color:'red'}}>{props.product.name}</td>}
                <td>{props.product.price}</td>
            </tr>
    )
}

export default ProductRow