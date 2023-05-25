import Table from 'react-bootstrap/Table';
import ProductRow from '../ProductRow/ProductRow'

const ProductTable = ({ products }) => {

    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th> Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((elm) => {
                        return (
                            <ProductRow elm={elm} />
                        )
                    })
                }
            </tbody>
        </Table>
    );
}

export default ProductTable