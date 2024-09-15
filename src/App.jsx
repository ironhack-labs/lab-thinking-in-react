import ProductsPage from './components/ProductsPage/ProductsPage';
import SearchBar from './components/ProductsPage/SearchBar/SearchBar';
import ProductTable from './components/ProductsPage/ProductTable/ProductTable';

function App() {
  return (
    <div className="App">
      <h1>React | Thinking in React</h1>
      <ProductsPage/>
      <SearchBar/>
      <ProductTable/>
    </div>
  );
}

export default App;
