import ProductRow from "./product-row/ProductRow";

function ProductTable({ products }) {
  return (
    <div className="d-flex flex-column">
      <div className='list-group list-group-flush fw-semibold'>
        <div className="d-flex bg-secondary-subtle list-group-item py-2 fw-bold">
          <div className="col-6">Name</div>
          <div className="col-6">Price</div>
        </div>
        {products.map((product) => 
            <ProductRow key={product.id} product={product}/>
        )}
      </div>
    </div>
  )
}

export default ProductTable;
