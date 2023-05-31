function ProductRow({search, products}) {

  return (
   
    <div className='ProductRow'>
  <div className="ProductAndPriceTable">
        <h1>Product</h1>
        <h1>Price</h1>
      </div>
      {products
      .filter((oneFilteredStudent)=>{
        if(oneFilteredStudent.name.includes(search))
        
        return true;
      })
      .map((products)=> {
        return  <div className="Row">
          <h1>{products.name}</h1>
          <h1>{products.price}</h1>
        </div>

        
      })
     
    }
    
    </div>
  )
}

export default ProductRow;