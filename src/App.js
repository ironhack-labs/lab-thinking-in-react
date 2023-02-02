import './App.css';
import ProductPage from './components/ProductPage'
import ProductRow from "./components/ProductRow";
import SearchBar from './components/SearchBar';

function App() {
  return (
  <div className="App">
     <ProductPage />
     <SearchBar/>
     <ProductRow />
  </div>
  )
  
}

export default App;
