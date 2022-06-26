import './App.css';
import ProductsPage from './components/ProductsPage.jsx';

function App() {
  return (
    <div className="App">
     <ProductsPage />
     <SearchBar />
     <ProductTable />
    </div>
  );
}

export default App;
