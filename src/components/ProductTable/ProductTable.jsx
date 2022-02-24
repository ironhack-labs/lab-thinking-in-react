import { Table } from "react-bootstrap"
import ProductRow from "../ProductRow/ProductRow"



const ProductsPage = props => {
    const { jsonData } = props

    return (

        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {jsonData.map((product, index) => {
                    return product.inStock === true ?
                        <tr key={index}>
                            <ProductRow  {...product} />
                        </tr> :
                        <tr style={{ color: "red" }} key={index}>
                            <ProductRow {...product} />
                        </tr>
                }
                )}

            </tbody>
        </Table>

    )
}

export default ProductsPage