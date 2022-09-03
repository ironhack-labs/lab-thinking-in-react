function ProductRow({ random, className }){
  return (
    <div className="product-row row">
      <div className={`col-6 ${className}`}><span style={{color: !random.inStock && 'red' }}>{random.name}</span></div>
      <div className={`col-6 ${className}`}><span>{random.price}</span></div>
    </div>
  );
}


ProductRow.defaultProps = {
  className: ''
}

export default ProductRow;