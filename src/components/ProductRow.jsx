

function ProductRow({ product }) {
     const inStock= ((product)=>{
    if(product.inStock) {
        return  {color: 'black'}
    }else{return {color: 'red'}} })

    return (
        <div className="productRow">
            <div style={inStock(product)}><h3>{product.name}</h3></div>
            
            <h3>{product.price}</h3>


           
  
      
      </div>
  )
}

export default ProductRow;