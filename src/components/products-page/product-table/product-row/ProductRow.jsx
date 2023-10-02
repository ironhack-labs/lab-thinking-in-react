function ProductRow({ product }) {
  return (
    <div className="d-flex list-group-item">
      <div className={`${product.inStock ? '' : 'text-danger'} col-6`} >{product.name}</div>
      <div className="col-6">{product.price}</div>
    </div>
  )
}

export default ProductRow;
