import { ProductRow } from './ProductRow';
import './ProductTable.css';

export const ProductTable = ({ products }) => {
  return (
    <section className="productTable">
      <div className="productTable__header">
        <h3>Name</h3>
        <h3>Price</h3>
      </div>
      <div className="productTable__productRows">
        {products.map((product) => {
          return (
            <ProductRow
              key={product.id}
              name={product.name}
              price={product.price}
            />
          );
        })}
      </div>
    </section>
  );
};
