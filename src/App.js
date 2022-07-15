import logo from './logo.svg';
import './App.css';
import ProductsPage from './components/ProductsPage.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <ProductsPage />
    </div>
  );
}

export default App;
