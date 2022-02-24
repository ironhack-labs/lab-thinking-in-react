import ProductRow from "../ProductRow/ProductRow"
function ProductTable({ products }) {

    return (

        <table>

            <thead>
                <tr>
                    <th>
                        Name
                    </th>

                    <th>
                        Price
                    </th>
                </tr>
            </thead>

            <tbody>

                {products.map(eachProduct => {
                    return (
                        <ProductRow eachProduct={eachProduct} />
                    )
                })}

            </tbody>

        </table>

    )
}

export default ProductTable