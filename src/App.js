import './App.css';
import ProductsPage from './Components/ProductsPage/ProductsPage';
import SearchBar from './Components/SearchBar/SearchBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">

      <SearchBar />
      <ProductsPage />


    </div>
  );
}

export default App;
