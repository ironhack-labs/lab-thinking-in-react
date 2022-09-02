import ProductRow from '../product-row/ProductRow';

function ProductTable() {
  return (
    <div className="container d-flex mt-4">
      <table className="table text-center">
        <thead className='bg-light text-dark'>
          <tr>
            <th scope="col-6">Name</th>
            <th scope="col-6">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mark</td>
            <td>Otto</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;
