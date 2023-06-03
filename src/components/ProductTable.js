import ProductsRow from './ProductRow';

function ProductTable (products) {
  return(
      <div>
        <table>
          <td>Name</td>
          <td>Price</td>
        < ProductsRow products={products} />
        </table>
      </div>    
  )
}

export default ProductTable;