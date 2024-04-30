import ProductRow from "./ProductRow";

function ProductTable(props) {
    const { products, searchValue, inStock } = props

return (
    <section id="table" >
        <h1>Product Table</h1>
        <div id="top-row"> <h2>Name</h2><h2>Price</h2></div>
        <ProductRow products={products} 
                  searchValue={searchValue} 
                  inStock={inStock} />
    </section>
)

}

export default ProductTable;