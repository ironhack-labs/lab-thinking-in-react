import ProductRow from './ProductRow'


const ProductTable = ({products}) => {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((elm, idx) => <ProductRow key={idx} {...elm} />)}
        </tbody>
      </table>
    )
}

export default ProductTable