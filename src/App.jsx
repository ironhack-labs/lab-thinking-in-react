import './App.css';
import ProductsPage from './components/ProductsPage';

function App() {
  return (
    <div className="App container-fluid">
      <div className="row mt-4 m-2 m-md-5">
        <div className="col"></div>
        <div className="col-12 col-md-8">
          <ProductsPage />
        </div>
        <div className="col"></div>
      </div>

    </div>
  );
}

export default App;
