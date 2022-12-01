import './ProductList.css'
import ProductRow from './ProductRow/ProductRow'



function ProductsList({products, filter}) {
    
 
  return(
      <div>
          <h1>Lista</h1>

          <div className="flex">
              <div>Name</div>
              <div>Price</div>
          </div>

          <ProductRow products={products} />

      </div>    
  )
}

export default ProductsList