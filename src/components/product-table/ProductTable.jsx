import ProductRow from '../product-row/ProductRow';
import './ProductTable.css';

function ProductTable({ products }) {
  return (
    <div className='m-5 w-25'>
      <td>
        <tr>
          <tr className='firstRow'>
            <th>Name</th>
            <th>Price</th>
            <th>In Stock</th>
          </tr>
        </tr>
        <hr></hr>
        <tr>
          <div >
            {products.map((product) => (
              <ProductRow key={product.id} product={product}/>
            ))}
          </div>
        </tr>
      </td>
    </div>
  );
}

export default ProductTable;