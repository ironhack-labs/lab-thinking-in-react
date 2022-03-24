import './App.css';
import jsonData from './data.json';
import { useState } from 'react';
import { ProductsPage } from './components/ProductsPage';
import { Children } from 'react';

function App() {
  const [products, setProducts] = useState(jsonData);

  const filterItems = (str) => {
    let filteredItem =
      str === ''
        ? products
        : products.filter((item) =>
            item.name.toLocaleLowerCase().includes(str.toLocaleLowerCase())
          );

    setProducts(filteredItem);
  };

  return (
    <div className="App">
      <div>
        <ProductsPage props={products} filterItems={filterItems}>
          {Children}
        </ProductsPage>
      </div>
    </div>
  );
}

export default App;
