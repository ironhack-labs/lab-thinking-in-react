function ProductRow(props){
    const {name, price, inStock} = props.props
    const style = {
      color: `red`
    }

    return(
      <tr>
      {inStock ?<th>{name}</th> : <th style={style}>{name}</th>}
        <th>{price}</th>
      </tr>
    )
  }
  
  export default ProductRow;