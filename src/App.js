import './App.css';

import ProductsPage from './components/ProductsPage/ProductsPage';
import SearchBar from './components/SearchBar/SearchBar';



function App() {
  return (
    <div className="App">
      <SearchBar />
      <ProductsPage />

    </div>
  );
}

export default App;
