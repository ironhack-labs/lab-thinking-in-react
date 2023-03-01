
import './App.css';

import ProductsPage from './components/ProductsPage'

import ProductsTable from './components/ProductTable'

function App() {
  return (
    <div className="App">
      <ProductsPage>
        <ProductsTable />
      </ProductsPage>
    </div>
  );
}

export default App;
