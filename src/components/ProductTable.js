
import ProductRow from "./ProductRow"

function ProductTable(props) {

  return (
    <div className="product-table">
      <table className="table-on-display">
        <thead className="table-head">
          <tr className="table-head-row">
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody className="table-body">
         {props.products.map((oneProduct) => {return (
          <ProductRow key={oneProduct.id} oneProduct={oneProduct} />
          )
         })}
        </tbody>
      </table> 
    </div>
  )
}

export default ProductTable
