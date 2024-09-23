import ProductRow from "./ProductRow"


function ProductTable(props) {
  const {products} = props
  return (
    <div>
      <div className="cabecera">
        <p>Name</p>
        <p>Price</p>
      </div>
      {products.map((product)=>{
        return (
        <ProductRow key={product.id} product={product}/>
        )
      })}
    </div>
  )
}

export default ProductTable