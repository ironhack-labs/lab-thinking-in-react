import ProductRow from './ProductRow';

function ProductTable ({search, products}) {
  
  
  return(
    <div>
      
      <ProductRow search={search} products={products} />
      

    </div>    
)
}
export default ProductTable           