import ProductsRow from "./ProductRow"

function ProductsTable(props) {
    return (
        <div className="productsTable">
            <table>
                <tr>
                    <th>Category</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
                {props.products.map(product => {
                    if(product.name.toUpperCase().includes(props.search.toUpperCase()))
                        if(props.inStock === true && product.inStock === true)
                            return (
                                <ProductsRow product={product} />
                            )
                        else if (props.inStock === false) {
                            return (
                                <ProductsRow product={product} />
                            )
                        }
                })}
            </table>

        </div>
    )
}

export default ProductsTable