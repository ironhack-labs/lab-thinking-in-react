/* eslint-disable react/prop-types */
import ProductRow from './ProductRow'

function ProductTable ({products}) {
return (
  <table className="ProductTable">
      <thead>
        <tr>
          <th>
            <h3>Name</h3>
          </th>
          <th>
            <h3>Price</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <ProductRow
            key={product.id}
            price={product.price}
            name={product.name}
            id={product.id}
            inStock={product.inStock}
          />
        ))}
      </tbody>
    </table>)
}

export default ProductTable;