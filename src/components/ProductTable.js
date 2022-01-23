import './ProductTable.css';
import ProductRow from './ProductRow';

const ProductTable = ({ products }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          const { category, price, inStock, name, id } = product;
          return (
            <ProductRow key={id} name={name} price={price} inStock={inStock} />
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
