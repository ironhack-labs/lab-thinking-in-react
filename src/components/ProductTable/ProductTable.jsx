import ProductRow from "../ProductRow/ProductRow"

const ProductTable = ({ products }) => {
  return (
    <div className="mt-5">
      <h3>ProductTable</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => {
            return (
              <tr key={product.id}>
                <ProductRow {...product} />
              </tr>
            )}
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable