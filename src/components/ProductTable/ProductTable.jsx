import ProductRow from "../ProductRow/ProductRow"
import "../ProductTable/ProductTable.css"

const ProductTable = ({ products }) => {


    return (
        <div className="ProductTable">
            <table>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>

                        <ProductRow productsRow={products}></ProductRow>
            
                </tbody>

            </table>
        </div>
    )

}

export default ProductTable