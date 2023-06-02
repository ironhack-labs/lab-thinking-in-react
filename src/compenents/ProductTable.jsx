import { ProductRow } from './ProductRow';

export default function ProductTable(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((product) => {
          return <ProductRow key={product.id} {...product} />;
        })}
      </tbody>
    </table>
  );
}
