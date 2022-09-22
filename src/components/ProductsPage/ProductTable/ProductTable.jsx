import ProductRow from './ProductRow/ProductRow.jsx';
import Table from 'react-bootstrap/Table';

const ProductTable = ({ products }) => {
  return (
    <div className="container">
      <Table striped bordered hover>
        <thead className="justify-content-center">
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody >
          <ProductRow  products={products} />
        </tbody>
      </Table>
    </div>
  );
};

export default ProductTable;
