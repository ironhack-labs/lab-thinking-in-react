import { ProductRow } from './ProductRow';

export function ProductTable({ products }) {
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>

        {products.map((product) => {
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

// <table>
// <tr>
//   <th>Company</th>
//   <th>Contact</th>
//   <th>Country</th>
// </tr>
// <tr>
//   <td>Alfreds Futterkiste</td>
//   <td>Maria Anders</td>
//   <td>Germany</td>
// </tr>
// <tr>
//   <td>Centro comercial Moctezuma</td>
//   <td>Francisco Chang</td>
//   <td>Mexico</td>
// </tr>
// </table>
