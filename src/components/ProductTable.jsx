import { ProductRow } from './ProductRow';

export function ProductTable({ products, searchString }) {
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchString.toLowerCase())
  );

  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {filteredProducts.map((product) => {
          return (
            <ProductRow
              name={product.name}
              price={product.price}
              inStock={product.inStock}
            />
          );
        })}
      </table>
    </div>
  );
}
