function ProductRow ({ name, price, inStock }){

    return (
       
      <tr>
        
        <td style={{color: inStock ? "" : "red" }}>{name}</td>
        <td style={{color: inStock ? "" : "red" }}>{price}</td>  

      </tr>
    )
}
export default ProductRow