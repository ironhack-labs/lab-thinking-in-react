

function ProductRow(props){
    
    return(
        <>
            <tr key = {props.productInfo.id} className={props.className}>
            <td> </td>
            <td>{props.productInfo.name}</td>
            <td>{props.productInfo.price}</td>
        </tr>
        </>
        
    )
}

export default ProductRow