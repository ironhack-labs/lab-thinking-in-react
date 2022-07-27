import ProductRow from "./ProductRow";


// Iteration 2
function ProductTable(props) {
    const {products} = props
  return (
    <div className="table">
      <div className="tableTitle">
        <p className="name">Name</p><p>Price</p>
      </div>
      {products.map((product, index) => {
      return(
      <ProductRow key={index} product={product}/>
      )
    })}
    </div>
  );
}

export default ProductTable;