import ProductRow from './ProductRow';

function ProductTable ({search, products}) {
  
  
  return(
    <div>
      <table>
      <ProductRow search={search} products={products} />
      </table>

    </div>    
)
}
export default ProductTable           