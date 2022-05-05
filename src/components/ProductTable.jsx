import ProductsRow from "./ProductRow"

const ProductTable = ({ products }) => {
    console.log(products)
    return (
        <table>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Price</th>
            </tr>
            <tr>
                <td> {products.map(eachProd => {
                    return (
                        <div key={eachProd.id}>
                            <ProductsRow {...eachProd}
                            />
                            <hr />
                        </div>
                    )
                })}



                </td>

            </tr>

        </table>
    )
}
export default ProductTable