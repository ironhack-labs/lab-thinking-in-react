import ProductRow from "./ProductRow";

function ProductTable(props) {
  const { products } = props

  return (
    <div className='product-table'>
      <div className="table-header">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      {products.map(product => {
        return <ProductRow product={product} key={product.id} />
      })}
    </div>
  )
}

export default ProductTable;