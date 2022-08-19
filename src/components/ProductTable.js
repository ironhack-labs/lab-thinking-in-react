import './ProductTable.css'
import ProductRow from './ProductRow';

function ProductTable ({products}) {
    return (
    <table className="products-table">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          <tr>
            {products.map((product) => {
                return (
                  <ProductRow 
                    key={product.id} 
                    name={product.name} 
                    price={product.price} 
                    inStock={product.inStock}/>
                )
            })}
          </tr>
    </table>  
  );
}
export default ProductTable;