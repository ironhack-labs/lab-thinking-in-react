import { Table } from "react-bootstrap";
import ProductRow from "../ProductRow/ProductRow";

const ProductTable = ({ products }) => {
    return (

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                {
                    products?.map(elm => <ProductRow key={elm.id} product={elm} />)
                }
            </tbody>

        </Table>
    );
}



export default ProductTable


