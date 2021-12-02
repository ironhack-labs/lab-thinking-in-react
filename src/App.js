import React, { useState, useEffect } from 'react';
import './App.css';
import Products from './Components/Products/Products';
import Search from './Components/Search/Search';
import data from './data.json';

function App() {
  const [search, setSearch] = useState('');
  const [products, setProducts] = useState(data.data);
  const [productsOG, setProductsOG] = useState(data.data);

  useEffect(() => {
    let copy = [...productsOG];
    setProducts(
      copy.filter((p) => {
        return p.name.includes(search);
      })
    );
  }, [search]);

  useEffect(() => {
    let normalized = products.map((p) => {
      return {
        ...p,
        name: p.name.toLowerCase(),
      };
    });
    setProducts([...normalized]);
    setProductsOG([...normalized]);
  }, []);

  //CheckBox
  const checkBoxChange = (e) => {
    let isChecked = e.currentTarget.checked;
    isChecked
      ? setProducts([
          ...productsOG.filter((p) => {
            return p.stocked;
          }),
        ])
      : setProducts([...productsOG]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <Search onSearch={setSearch} onCheckBox={checkBoxChange} />

        <Products products={products} />
      </header>
    </div>
  );
}

export default App;
