

const ProductRow = (props) =>{
  const {name,category,price, inStock} = props.eachProd

const styleIt = {
  display:'flex',
  justifyContent:'space-around'
}
  return (
 


<tr style={styleIt}>

  <td>{name}</td>
 {inStock ? <td>{price}</td> : <td style={{color:'red'}}>{price}</td>} 
</tr>    
  
  )

  
  }
  export default ProductRow