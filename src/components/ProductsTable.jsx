import ProductRow from './ProductRow';

export default function ProductsTable(props) {
  return (
    <div>
      <table>
        <thead className="bg-color ">
          <tr>
            <th>NAME</th>
            <th>PRICE</th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
