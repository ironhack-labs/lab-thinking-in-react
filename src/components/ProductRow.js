function ProductRow (props) {
    
    return (
          <>
            <td style={props.product.inStock ? {color: 'black'} : {color: 'red'}}> {props.product.name}</td>
            <td>{props.product.price}</td>
          </>
    )
}

export default ProductRow