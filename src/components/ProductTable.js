import { Container, Table } from "react-bootstrap"
import ProductRow from "./ProductRow"

function ProductTable({ theProducts }) {

    return (
        <Container>
            <Table >
                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                </thead>

                <ProductRow theProducts={theProducts} />

            </Table>
        </Container>
    )
}

export default ProductTable