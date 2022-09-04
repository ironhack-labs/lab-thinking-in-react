import ProductRow from './ProductRow';
import productsData from '../data.json';
import { useState, useEffect } from 'react';

function ProductTable({ search, stockFilter }) {
  const [productsToShow, setProductsToShow] = useState([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setProductsToShow(productsData);
    }, 3000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (productsToShow.length === 0) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {productsToShow
            .filter((product) => product.name.toLowerCase().includes(search.toLowerCase()))
            .filter((product) => (stockFilter ? product.inStock : true))
            .map((product) => (
              <ProductRow key={product.id} {...product} />
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductTable;

// El ...product de la lín22 es equivalente a coger todos los atributos del product del json: name={product.name}, price={product.price}...
