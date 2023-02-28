import { ProductRow } from './ProductRow';

export const ProductTable = ({ products }) => {
  return (
    <table>
      <tr>
        <th>Name</th>
        <th>Price</th>
      </tr>
      {products.map((product) => {
        return <ProductRow key={product.id} product={product} />;
      })}
    </table>
  );
};
