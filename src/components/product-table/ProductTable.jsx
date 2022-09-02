import ProductItem from "../product-item/ProductItem"

function ProductTable({ products }) {
  return(
    <div>
      <table className="table text-center mt-3">
        <thead className="bg-secondary bg-opacity-25">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
              <ProductItem key={product.name} product={product}/>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ProductTable