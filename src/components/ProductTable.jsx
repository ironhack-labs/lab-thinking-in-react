import ProductRow from './ProductRow';

const ProductTable = (props) =>{
  const centerIt = {
    display:'flex',
    flexDirection:'column',
    
    alignItems:'center'
    
      }
     
   console.log(props)
  return (
  <table style={centerIt}>
   <thead>
    <tr>
      <th>Name</th>
      <th>Price</th>
    </tr>
  </thead>
    <tbody style={{
      width:'100%'
   
    }}>
    {props.productsArray.map(eachProduct=>{ return <ProductRow eachProd={eachProduct} key={eachProduct.id}/>})}
      </tbody>
</table>
    
  
  )

  
  }
  export default ProductTable