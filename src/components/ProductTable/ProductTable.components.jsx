import ProductRow from '../ProductRow/ProductRow.component';
export default function ProductTable(props) {
  const { products } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
          {products.map((product) => {
            return (
              <ProductRow
                product={product}
                key={product.id}
                inStock={product.inStock}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
