import ProductRow from "./ProductRow"

const ProductTable = ({ products }) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Category</th>
                    <th>Price</th>

                </tr>
            </thead>
            {
                products.map(elm => {
                    return (
                        <tbody key={elm.id}>
                            <tr >
                                <ProductRow product={elm} />
                            </tr>
                        </tbody>
                    )
                })
            }

        </table>
    )
}
export default ProductTable