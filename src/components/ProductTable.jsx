import ProductRow from "./ProductRow"

function ProductsTable({ theProducts }) {

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>

            <tbody>
                {
                    theProducts.map(product => <ProductRow key={product.id} eachProduct={product} />)
                }
            </tbody>
        </table>
    )
}
export default ProductsTable