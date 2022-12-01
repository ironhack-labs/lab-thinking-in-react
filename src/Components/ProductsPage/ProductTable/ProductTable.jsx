import Table from 'react-bootstrap/Table';
import { Col, Row } from 'react-bootstrap';
import ProductRow from '../ProductRow/ProductRow';

function ProductsTable() {

    return (

        <table striped bordered hover>
            <thead>
                <tr>
                    <th>Product</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><ProductRow /></td>
                    <td><ProductRow /></td>

                </tr>

            </tbody>
        </table>
    )
}

export default ProductsTable