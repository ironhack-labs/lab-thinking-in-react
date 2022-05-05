// import { useState } from 'react';
import ProductRow from './ProductRow'

function ProductTable (props) {
//   const [products, setProducts] = useState(jsonData);
    const products = props.products;

  return(
    <div className="products">
     <table className="product-table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      </thead>
      <tbody>
       {products.map(product=><ProductRow name={product.name} price={product.price} inStock={product.inStock} key={product.id} />)}
      </tbody>
     </table>
    </div>    
  )
}

export default ProductTable;