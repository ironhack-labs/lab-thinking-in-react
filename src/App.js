import logo from './logo.svg';
import './App.css';
import ProductsPage from './components/ProductsPage'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <ProductsPage/>
        
      </header>
    </div>
  );
}

export default App;
