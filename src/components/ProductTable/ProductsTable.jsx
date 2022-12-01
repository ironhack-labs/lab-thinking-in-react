import ProductRow from "../ProductRow/ProductRow"
import { Table } from "react-bootstrap"

const ProductsTable = ({ products }) => {


    return (
        <Table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => {
                    return (<ProductRow product={product} key={product.id}></ProductRow>)
                })}
            </tbody>
        </Table>
    )

}

export default ProductsTable