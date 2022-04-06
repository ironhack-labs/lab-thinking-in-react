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
            <th scope="row">{product.name}</th>
            <td>{product.price}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
    </div>
  )
}

export default ProductTable