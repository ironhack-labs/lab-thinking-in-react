import ProductRow from "./ProductRow"

function ProductTable({ products, filterText }) {

      const filteredProducts = products.filter((product) => 
        product.name.toLowerCase().includes(filterText.toLowerCase()) 
     // no me funciona el check inStockOnly
    );

  return (
    <div className="table-container">
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {filteredProducts.map(product => (
                    <ProductRow key={product.id} product={product}/>
                ))}  
            </tbody>
        </table>
    </div>
  )
}

export default ProductTable