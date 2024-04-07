import ProductRow from "../product-row/ProductRow";


function ProductsTable({filteredProducts}) {
  return (
    <div>
        <table className="table table-striped-columns table-hover">
            <thead>
                <tr>
                    <th scope="col" colSpan="2">Name</th>
                    <th scope="col" colSpan="2">Price</th>
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

export default ProductsTable;