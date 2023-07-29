

function ProductRow (props) {
    
    return(
     <tr>
        {props.product.inStock && <td>{props.product.name}</td>}
        {!props.product.inStock && <td className="red">{props.product.name}</td>}
        <td>{props.product.price}</td>
     </tr>
    )
  }
  
  export default ProductRow;