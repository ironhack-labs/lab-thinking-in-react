import React from 'react';
import './App.css';
import data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';
function App() {
  const products = data.data;
  return (
    <div className="App">
      <div>
        <h2>IronStore</h2>
        <tabel>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody></tbody>
        </tabel>
      </div>
      {products.map((data) => {
        return <FilterableProductTable data={data} />;
      })}
    </div>
  );
}
export default App;
