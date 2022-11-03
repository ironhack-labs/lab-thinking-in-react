import { ProductRow } from './ProductRow';

export const ProductTable = ({ products }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow product={product} key={product.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};
