import SearchBar from './Components/SearchBar';
import ProductTable from './Components/ProductTable';
import ProductPage from './Components/ProductPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProductPage/>
      <SearchBar/>
      <ProductTable/>
    </div>
  );
}

export default App;
