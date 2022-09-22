import Table from 'react-bootstrap/Table';
import ProductRow from '../ProductRow/ProductRow';

const ProductTable = ({ products }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Category</th>
                </tr>
            </thead>
            <tbody>{products.map((product) => (
                <ProductRow key={product.id} product={product} />
            ))}
            </tbody>
        </Table>
    );
};

export default ProductTable