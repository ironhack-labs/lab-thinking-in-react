import './App.css';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <ProductsPage />
    </div>
  );
}

export default App;
