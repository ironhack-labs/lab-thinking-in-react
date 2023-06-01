import SearchBar from './SearchBar';
import { useState } from 'react';

function ProductRow(products) {
  const [searchTerm, setSearchTerm] = useState('');

  const productos = products.products.products;
  return (
    <div className="data">
      <table>
        {productos.map((product) => {
          return (
            <tr>
              {product.inStock ? (
                <td className="border">{product.name}</td>
              ) : (
                <td className="border red">{product.name}</td>
              )}

              <td className="border">{product.price}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default ProductRow;
