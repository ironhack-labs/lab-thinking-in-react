import ProductRow from '../ProductRow/ProductRow'
import './ProductTable.css'

function ProductTable({products}) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Category</th>
        </tr>
      </thead>
      <tbody>
        { products.map((x, i) =>  <ProductRow category={x.category} price={x.price} inStock={x.inStock} name={x.name} id={x.id} i={i+1}/>)}
      </tbody>
    </table>
  )
}


export default ProductTable