import ProductItem from "../product-item/ProductItem"

function ProductTable({ data }) {
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
          {data.map((item) => (
              <ProductItem item={item}/>
          ))}
        </tbody>
      </table>
      
    </div>
  )
}

export default ProductTable