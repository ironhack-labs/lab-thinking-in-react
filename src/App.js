import logo from './logo.svg';
import './App.css';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <div className="App">
     <ProductsPage />  
    
    <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </header>
     
     </div>
  );
}

export default App;
