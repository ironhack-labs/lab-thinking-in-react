

function ProductRow(props) {

    const {category,price,inStock,name, id} = props.product
    const stockColor = inStock ? 'black' : 'red'
  return (
    
        <tr style={{color : stockColor }}>
        <td>{name}</td>
        <td>{price}</td>
        </tr>

      
   
  )
}

export default ProductRow
