import React, { useState, useEffect } from 'react';
import './App.css';
import { ProductRow, ProductsPage, SearchBar } from './components';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Error retrieving data');
        }
        return response.json();
      })
      .then(data => setProducts(data))
      .catch(error => setError(error.message));
  }, []);

  return (
    <div className="App">
      <ProductsPage>
        <SearchBar />
        {error ? (
          <p>Something went wrong: {error}</p>
        ) : products.length ? (
          <ProductTable products={products} />
        ) : (
          <p>No products found</p>
        )}
      </ProductsPage>
    </div>
  );
}

function ProductTable(props) {
  const { products } = props;

  return (
    <table className="product-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {products.map(product => (
          <ProductRow key={product.id} product={product} />
        ))}
      </tbody>
    </table>
  );
}

export default App;
