import ProductRow from '../ProductRow';
import './Product-Table.css'

function ProductTable({ products }) {

  return (
    <>
      <div className="container-table">
        <table className="table text-center">
          <thead className='table-dark'>
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => {
              return (
                <ProductRow
                  name={product.name}
                  price={product.price}
                  inStock={product.inStock}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ProductTable;
