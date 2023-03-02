import ProductRow from "../ProductRow/ProductRow"
import { Table } from "react-bootstrap"

const ProductTable = ({ products }) => {

    return (

        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <ProductRow products={products} />
                </tbody>
            </Table>
        </>

    )
}

export default ProductTable